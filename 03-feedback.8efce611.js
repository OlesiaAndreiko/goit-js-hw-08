function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var i,r,o,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function h(){var e=v();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,o-(e-c)):n}(e))}function w(e){return f=void 0,g&&i?y(e):(i=r=void 0,a)}function O(){var e=v(),n=S(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y={email:"",message:""},j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};function S(e){y.email=j.email.value,y.message=j.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}j.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")})),j.message.addEventListener("input",e(t)(S,500)),j.email.addEventListener("input",e(t)(S,500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(j.email.value=t.email||"",j.message.value=t.message||"")}();
//# sourceMappingURL=03-feedback.8efce611.js.map