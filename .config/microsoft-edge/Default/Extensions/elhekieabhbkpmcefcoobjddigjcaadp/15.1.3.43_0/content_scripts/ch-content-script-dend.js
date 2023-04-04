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
$(document).ready((function(e){"use strict";isSupportedBrowserVersion()&&(chrome.runtime.onMessage.addListener((function(e){if("viewer-type"===e.dend_op)setTimeout((t=>{e.main_op="pdf-menu",e.url=document.location.href,e.persist="mime"!=e.viewer,sendMsg(e)}),120)})),"application/pdf"===document.contentType?sendMsg({main_op:"check-mime-viewer-availability",url:document.location.href}):!1===isGoogleQuery(document.location.href)&&sendMsg({main_op:"html-startup",url:document.location.href,startup_time:Date.now()}))}));