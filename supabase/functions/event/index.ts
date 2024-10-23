import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!,
);

function setCORSHeaders(response: Response): Response {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Replace '*' with specific origin if needed
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-client-info, apikey",
  );
  return response;
}

// Never remove this!: supabase functions deploy event --no-verify-jwt
async function handleRequest(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    // Handle CORS preflight request
    const response = new Response(null, { status: 204 });
    return setCORSHeaders(response);
  }

  try {
    const requestBody = await req.json();
    const {
      project_id,
      os,
      referrer,
      name,
      version,
    } = requestBody;

    // Extract User-Agent from request headers

    const safe_os = os || null;
    // Create a new Request object for the filter function
    const filterRequest = new Request(
      "https://hkromzwdaxhcragbcnmw.supabase.co/functions/v1/filter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passed_request: {
            user_agent: req.headers.get("User-Agent") || "",
            ip: req.headers.get("cf-connecting-ip") || "127.0.0.1",
          },
          os: safe_os,
        }),
      },
    );

    // Send the request to the filter function
    const filterResponse = await fetch(filterRequest);
    // Check if the filter function returned an error
    if (!filterResponse.ok) {
      const errorMessage = await filterResponse.text();
      throw new Error(`Filter function error: ${errorMessage}`);
    }

    // Parse the JSON response to access browser and other properties
    const filterData = await filterResponse.json();

    // If the filter function didn't throw an error, continue with the rest of the function

    const eventID = globalThis.crypto.randomUUID();
    const { error: eventError } = await supabase
      .from("events") // Replace with your actual table name
      .upsert([
        {
          id: eventID, // Replace with the actual column name for event ID

          project_id: project_id,
          timestamp: new Date().toISOString(),
          name: name,
          version: version,
          referrer: referrer,
          browser: filterData.browser,
          os: safe_os === null ? filterData.req_os : safe_os,
          user_agent: req.headers.get("User-Agent"),
          location: filterData.location,
        },
      ]);

    if (eventError) {
      throw eventError;
    }
    const jsonResponse = new Response("", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    return setCORSHeaders(jsonResponse);
  } catch (error) {
    console.error("Error:", error);
    const errorResponse = new Response(error.message, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
    return setCORSHeaders(errorResponse);
  }
}

Deno.serve(handleRequest);
