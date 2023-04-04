/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
import{communicate as e}from"./communicate.js";import{common as n}from"./common.js";import{util as t}from"./util.js";import{Proxy as o}from"./proxy.js";import{analytics as i}from"../common/analytics.js";import{acroweb2pdf as r}from"./acro-web2pdf.js";import{sharepointModule as a}from"./sharepoint-module.js";import{SETTINGS as s}from"./settings.js";import{dcLocalStorage as l,dcSessionStorage as c}from"../common/local-storage.js";var E;E||(E=new function(){this.proxy=o.proxy.bind(this),this.LOG=(...e)=>n.LOG(...e);const t=0,E=1,m=2,_="pdf_downloaded",u="pdf_downloading",I="pdf_failure";function d(e,n){if("pdfviewer"!==e.click_context)return;const o="SharePoint"===e.workflow_name||e.isSharePointURL,r="FillnSign"===e.paramName;switch(n){case t:r?o?i.event(i.e.VIEWER_SHAREPOINT_FILLSIGN_CLICKED):i.event(i.e.VIEWER_FILLSIGN_CLICKED):o?i.event(i.e.VIEWER_SHAREPOINT_CLICKED):i.event(i.e.VIEWER_OPEN_IN_ACRO_CLICKED);break;case E:o?r?i.event(i.e.VIEWER_SHAREPOINT_FILLSIGN_CLICKED_COMPLETE):i.event(i.e.VIEWER_SHAREPOINT_CLICKED_COMPLETE):r?i.event(i.e.VIEWER_FILLSIGN_CLICKED_COMPLETE):i.event(i.e.VIEWER_OPEN_IN_ACRO_CLICKED_COMPLETE);break;case m:r?i.event(i.e.VIEWER_FILLSIGN_CLICKED_FAILED):i.event(i.e.VIEWER_OPEN_IN_ACRO_CLICKED_FAILED)}}function f(n){n.mimeHandled||e.sendMessage(n)}function p(e,n){e.panel_op="status",e.current_status=n,f({tabId:e.tabId,loaded:e.loaded,filename:e.filename,url:e.url,persist:e.persist,version:e.version,start:e.start,is_pdf:e.is_pdf,newUI:e.newUI,panel_op:e.panel_op,content_op:e.content_op,click_context:e.click_context,current_status:e.current_status,mimeHandled:e.mimeHandled})}this.getVersion=function(n){var t,o=function(o){if(o){s.DEBUG_MODE&&-1!==e.version&&(o.majorVersion=e.version,o.fillnSignEnabled=0===o.majorVersion?"false":o.fillnSignEnabled),clearTimeout(t),function(e){e.fillnSignEnabled&&"true"===e.fillnSignEnabled?s.FILL_N_SIGN_ENABLED=!0:s.FILL_N_SIGN_ENABLED=!1}(o),function(e){e.frictionlessEnabled&&"false"===e.frictionlessEnabled?s.FRICTIONLESS_ENABLED=!1:s.FRICTIONLESS_ENABLED=!0}(o),function(e){const n="true"===e.sharePointEnabled;a.setFeatureEnabled(n),n&&a.handleAllowedListFromNativeHost(e.sharePointUrlString),l.setItem("isSharepointFeatureEnabled",a.isFeatureEnabled())}(o),function(n){const t=+n.majorVersion;e.setVersion(t),1==n.isdummy&&e.setNMHConnectionStatus(!1)}(o),function(e){if(e.optinState&&"false"===e.optinState);else{let n;const t=+e.majorVersion;1===t?(n={VERSION:"Unknown"},i.shim="unknown"):0===t?(n={VERSION:"None"},i.shim="none"):(n={VERSION:e.majorVersion+"."+e.minorVersion},i.shim=e.majorVersion+"."+e.minorVersion),c.getItem("startupComplete")||i.event(i.e.SHIM_VERSION,n)}}(o);var r={0:"Admin",1:"RDC",2:"FTE",3:"Other",4:"None"}[o.installSource]||"Unknown";n({ver:+o.majorVersion,source:r,installMonth:o.installMonth,installYear:o.installYear})}};t=setTimeout((function(){o({messageType:"shimVersionInfo",majorVersion:"1",minorVersion:"0",isdummy:!0})}),2e3),r.getVersion(o)},this.openInAcrobat=function(n,o,i){var a=this;return chrome.tabs.get(n.tabId,(function(o){if(o.url&&!/chrome\-extension/.test(o.url)&&(n.url=o.url),d(n,t),function(n){void 0===n.filename&&(n.filename=e.filenameFromUrl(n.url))}(n),e.version>1){if(!0===n.isSharePointURL)return r.openInAcrobat(n),p(n,_),i&&i("OP_SUCCESS"),void d(n,E);if(n.authenticatedPDF&&1==n.authenticatedPDF)return delete n.authenticatedPDF,n.current_status===_&&n.base64PDF&&r.openInAcrobat(n),void f(n);p(n,u),function(e,n,t){p(n,u);const o=n.dataURL?n.dataURL:n.url;fetch(o).then(e.proxy((function(e){return e.status>=400&&(p(n,I),d(n,m),t&&t("OP_FAILURE")),e.blob()}))).then(e.proxy((function(e){if("application/pdf"===e.type){const o=new FileReader;o.onloadend=function(e){n.base64PDF=e.target.result,r.openInAcrobat(n),p(n,u)},o.readAsDataURL(e),t&&t("OP_SUCCESS"),d(n,E)}else n.authenticatedPDF=!0,f(n)})))}(a,n,i)}else chrome.downloads.download({url:n.url,conflictAction:"uniquify"}),i&&i("APP_NOT_INSTALLED")})),!0},this.openConvertedFile=function(e){r.openFile(e)}}),e.registerHandlers({open_in_acrobat:E.proxy(E.openInAcrobat),open_converted_file:E.proxy(E.openConvertedFile)});export const acroActions=E;