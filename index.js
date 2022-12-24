// ==UserScript==
// @name         Remove View Analytics
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove View Analytics
// @author       Kyrch
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let divs

    setInterval(() => {
        divs = document.querySelectorAll(".css-1dbjc4n.r-18u37iz.r-1h0z5md")

        divs.forEach((div) => {
            if (div.innerHTML.includes("analytics")) {
                div.remove()
            }
        })
    }, 50)
})();