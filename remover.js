// ==UserScript==
// @name         YouTube Homepage Blocker and Redirect (No Icon)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  script to block youtube homepage
// @author       boris-on
// @match        https://www.youtube.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function checkAndRedirect() {
        if (location.pathname === "/" || location.href.startsWith("https://www.youtube.com/?")) {
            location.href = "https://www.youtube.com/feed/subscriptions";
        }
    }

    const hideLogo = () => {
        const logo = document.querySelector('a#logo');
        if (logo) {
            logo.style.display = 'none';
        }
    };

    checkAndRedirect();

    setInterval(() => {
        checkAndRedirect();
        hideLogo();
    }, 500);

})();
