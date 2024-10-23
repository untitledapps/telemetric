!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Telemetric=t(require("react")):e.Telemetric=t(e.React)}(this,(e=>(()=>{"use strict";var t={484:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TelemetricProvider=void 0,t.useTelemetric=function(){var e=(0,c.useContext)(a);if(void 0===e)throw new Error("useTelemetric must be used within a TelemetricProvider");return e};var c=o(r(12)),u=s(r(65)),a=(0,c.createContext)(void 0);t.TelemetricProvider=function(e){var t=e.children,r=e.projectId,n=e.version,i=e.trackOnLocalhost,o=void 0!==i&&i;(0,c.useEffect)((function(){u.default.init(r,n,o)}),[r,n,o]);var s={event:u.default.event.bind(u.default),revenue:u.default.revenue.bind(u.default),getUserId:u.default.getUserID.bind(u.default),saveUserId:u.default.saveUserID.bind(u.default)};return c.default.createElement(a.Provider,{value:s},t)}},73:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Telemetric=t.useTelemetric=t.TelemetricProvider=void 0;var i=r(484);Object.defineProperty(t,"TelemetricProvider",{enumerable:!0,get:function(){return i.TelemetricProvider}}),Object.defineProperty(t,"useTelemetric",{enumerable:!0,get:function(){return i.useTelemetric}});var o=r(65);Object.defineProperty(t,"Telemetric",{enumerable:!0,get:function(){return n(o).default}})},65:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{u(n.next(e))}catch(e){o(e)}}function c(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}u((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,n,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=c(0),s.throw=c(1),s.return=c(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&c[0]?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;switch(n=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],n=0}finally{r=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.init=function(e,t){return r(this,arguments,void 0,(function(e,t,r){var i;return void 0===r&&(r=!1),n(this,(function(n){switch(n.label){case 0:return this.project_id=e,this.version=t,this.track_on_localhost=r,[4,this._initializeUserID()];case 1:if(n.sent(),i="https://hkromzwdaxhcragbcnmw.supabase.co/functions/v1/init","localhost"===window.location.hostname&&!this.track_on_localhost)return console.log("Telemetric initialized successfully, but will not send any data on Localhost."),[2];n.label=2;case 2:return n.trys.push([2,4,,5]),[4,fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project_id:this.project_id,user_id:this.user_id,version:this.version,url_running_on:window.location.href,referrer:document.referrer})})];case 3:return n.sent().ok||console.error("Failed to initialize Telemetric"),[3,5];case 4:return n.sent(),[3,5];case 5:return[2]}}))}))},e.event=function(e){return r(this,void 0,void 0,(function(){var t,r,i;return n(this,(function(n){switch(n.label){case 0:if(!this.safetyCheck("Event '".concat(e,"'")))return[2];if("localhost"===window.location.hostname&&!this.track_on_localhost)return console.log("Telemetric: Not tracking on localhost."),[2];t="https://hkromzwdaxhcragbcnmw.supabase.co/functions/v1/event",n.label=1;case 1:return n.trys.push([1,3,,4]),[4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project_id:this.project_id,name:e,referrer:document.referrer,version:this.version})})];case 2:return(r=n.sent()).ok||console.error("Failed to send event:",r.status),[3,4];case 3:return i=n.sent(),console.error("Telemetric Event Error:",i),[3,4];case 4:return[2]}}))}))},e.revenue=function(e){return r(this,void 0,void 0,(function(){var t,r,i;return n(this,(function(n){switch(n.label){case 0:if(!this.safetyCheck("Revenue"))return[2];if("localhost"===window.location.hostname&&!this.track_on_localhost)return console.log("Telemetric: Not tracking on localhost."),[2];t="https://hkromzwdaxhcragbcnmw.supabase.co/functions/v1/revenue",n.label=1;case 1:return n.trys.push([1,3,,4]),[4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project_id:this.project_id,version:this.version,referrer:document.referrer,total:e})})];case 2:return(r=n.sent()).ok||console.error("Failed to send revenue:",r.status),[3,4];case 3:return i=n.sent(),console.error("Telemetric Revenue Error:",i),[3,4];case 4:return[2]}}))}))},e.safetyCheck=function(e){var t=!0;return this.project_id||(console.error("".concat(e," reporting failed. Missing project ID.")),t=!1),this.user_id||(console.error("".concat(e," reporting failed. Missing user ID. Make sure to call init() before tracking events or revenue. Also make sure to await init()")),t=!1),t},e._initializeUserID=function(){return r(this,void 0,void 0,(function(){return n(this,(function(e){return this.user_id=localStorage.getItem("telemetric_user_id"),this.user_id||(this.initial=!0,this.user_id=this._generateUserID(),localStorage.setItem("telemetric_user_id",this.user_id)),[2]}))}))},e._generateUserID=function(){var e=function(){return Math.floor(16*Math.random()).toString(16)};return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=parseInt(e(),16);return"x"===t?e():(3&r|8).toString(16)}))},e.saveUserID=function(e){return r(this,void 0,void 0,(function(){return n(this,(function(t){return localStorage.setItem("telemetric_user_id",e),this.user_id=e,[2]}))}))},e.getUserID=function(){return r(this,void 0,void 0,(function(){return n(this,(function(e){return this.user_id=localStorage.getItem("telemetric_user_id"),[2,this.user_id]}))}))},e.project_id=null,e.user_id=null,e.version=null,e.track_on_localhost=!1,e.initial=!1,e}();t.default=i},12:t=>{t.exports=e}},r={};return function e(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={exports:{}};return t[n].call(o.exports,o,o.exports,e),o.exports}(73)})()));