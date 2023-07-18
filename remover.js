// ==UserScript==
// @name         Remove YouTube Icon
// @version      0.1
// @description  script to remove youtube icon
// @match        https://www.youtube.com
// ==/UserScript==

(function() {
    'use strict';
    var logoElement = document.getElementById("logo");
    if (logoElement) {
        logoElement.remove();
    }

    var homeLink = document.querySelector("#logo a");
    if (homeLink) {
        homeLink.removeAttribute("href");
        homeLink.removeAttribute("title");
        homeLink.addEventListener("click", function(event) {
            event.preventDefault();
        });
    }
})();
