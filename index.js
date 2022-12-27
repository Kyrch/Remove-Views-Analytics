// ==UserScript==
// @name         Remove View Analytics
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Remove View Analytics
// @author       Kyrch
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    setInterval(() => {
        [...document.querySelectorAll(".css-1dbjc4n.r-18u37iz.r-1h0z5md")].filter(div => div.innerHTML.includes("analytics")).forEach(div => div.remove())
    }, 50)
})();
