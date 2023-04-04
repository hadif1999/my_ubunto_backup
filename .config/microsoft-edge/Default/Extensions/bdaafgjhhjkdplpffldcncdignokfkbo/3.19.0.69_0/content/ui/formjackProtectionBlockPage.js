!function n(c,r,s){function i(t,e){if(!r[t]){if(!c[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(o)return o(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}a=r[t]={exports:{}},c[t][0].call(a.exports,function(e){return i(c[t][1][e]||e)},a,a.exports,n,c,r,s)}return r[t].exports}for(var o="function"==typeof require&&require,e=0;e<s.length;e++)i(s[e]);return i}({1:[function(u,e,d){!function(t){!function(){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var e=u("../utils.jsx"),n=(e=e)&&e.__esModule?e:{default:e};function c(e){return React.createElement("div",{className:"form-jack-block-page-header"},React.createElement("div",{className:"form-jack-safeweb-icon"}),React.createElement("div",{className:"form-jack-header-text"},e.strings["Safe Web"]))}function r(e){var t=e.descText.split("{0}");return React.createElement("div",{className:"form-jack-block-page-description"},React.createElement("div",{className:"form-jack-block-page-description-content"},React.createElement("div",{className:"form-jack-blocked-by-logo-area"},React.createElement("div",{className:"form-jack-blocked-by-image"}),React.createElement("div",{className:"form-jack-blocked-by-text"},e.strings["BLOCKED BY"]),React.createElement("div",{className:"form-jack-blocked-by-area-norton-logo"})),React.createElement("div",{className:"form-jack-blocked-message-area"},React.createElement("div",{className:"form-jack-heading-text"},e.strings["Possible credit card skimmer blocked!"]),React.createElement("div",{className:"form-jack-desc"},React.createElement("span",null,t[0]),React.createElement("span",{className:"domain-name"},"(",e.blockedDomain,")"),React.createElement("span",null,t[1])," ",React.createElement("a",{className:"form-jack-link form-jack-learn-more-link",onClick:function(){o.sendMessage({name:a.FORMJACK_LEARN_MORE_LINK_CLICK})}},e.strings["Learn more"])),React.createElement("div",{className:"form-jack-desc1"},e.strings["This web address may be associated with the illegal collection of credit card information by cyberthieves."]),React.createElement("div",{className:"form-jack-desc2"},React.createElement("span",{className:"form-jack-span2"},e.strings["We strongly recommend you don't enter any information into this page:"])," ",React.createElement("span",{className:"form-jack-parent-url"},e.parentUrl)),React.createElement("div",{className:"form-jack-technical-link-container"},React.createElement("a",{className:"form-jack-link technical-details-link",onClick:function(){o.sendMessage({name:a.FORMJACK_LEARN_TECHNICAL_DETAILS_CLICK})}},e.strings["Learn technical details"])),React.createElement("div",{className:"form-jack-continu-link-and-exit-button-container"},React.createElement("div",{className:"form-jack-continue-link"},React.createElement("a",{className:"form-jack-link continue-link",onClick:function(){o.sendMessage({name:a.FORMJACK_CONTINUE_TO_SITE,blockedDomain:e.blockedDomain,tabUrl:e.parentUrl})}},e.strings["Accept risk and continue"])),React.createElement("button",{className:"form-jack-exit-button",onClick:function(){o.sendMessage({name:a.FORMJACK_EXIT_PAGE})}},e.strings["Exit this page (recommended)"])))))}function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(m(e.strings)||m(e.descText))return null;l(e.direction)&&n.default.setDirection(e.direction),a=new URL(n.default.getDocumentUrl()),a=new URLSearchParams(a.search),t=a.get(i.ORIGINAL_URL),a=a.get(i.BLOCKED_DOMAIN);var t=(a={blockedDomain:a=m(a)?new URL(t).hostname:a,parentUrl:t}).blockedDomain,a=a.parentUrl;return m(t)||m(a)?null:React.createElement("div",{className:"form-jack-block-page"},React.createElement(c,{strings:e.strings}),React.createElement(r,{strings:e.strings,blockedDomain:t,parentUrl:a,descText:e.descText}))}var e=NSSS,a=(e.uiConstants,e.uiConstants.MESSAGES),i=e.constants,e=SymBfw,o=e.extensionAdapter,e=e.utils,l=e.isntNil,m=e.isNil;d.default=s,e={show:function(){o.sendMessage({name:a.FORMJACK_BLOCKPAGE_INIT},function(e){var t,a;m(e)||(t=e.direction,a=e.strings,e=e.descText,ReactDOM.render(React.createElement(s,{strings:a,direction:t,descText:e}),document.getElementById("container")))})}},t.NSSS.formjackProtectionBlockPageUI=e,NSSS.formjackProtectionBlockPageUI.show()}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils.jsx":2}],2:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(e,t,a){return t&&c(e.prototype,t),a&&c(e,a),e};function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=SymBfw.utils.isntNil,n=(n(s,null,[{key:"setDirection",value:function(e){var t=document.getElementsByTagName("body");r(t)&&r(t[0])&&t[0].setAttribute("dir",e)}},{key:"isTrustedEvent",value:function(e){if(SymBfw.utils.isNil(e))throw new Error("event should not be null");return e.isTrusted}},{key:"constructURL",value:function(e){return!SymBfw.utils.isString(e)||""===e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("ftp://")?e:"https://"+e}},{key:"isValidUrl",value:function(e){if(!/^[a-zA-Z0-9#%@&_\-=:\\.\/?]*$/.test(e))return!1;try{new URL(e)}catch(e){return!1}return!0}},{key:"getDocumentUrl",value:function(){return location.href}}]),s);function s(){if(!(this instanceof s))throw new TypeError("Cannot call a class as a function")}a.default=n},{}]},{},[1]);