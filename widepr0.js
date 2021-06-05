// ==UserScript==
// @name         Wide Pr0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  make pr0gramm more widescreen friendly
// @author       elmo
// @include      /^https?://pr0gramm.com/.*$/
// @icon         https://pr0gramm.com/media/pr0gramm-favicon.png
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('div.item-info {max-width: 1200px; margin: auto}\r\ndiv.item-comments {max-width: 1200px; margin: auto}');

    var g = document.createElement('script');
    var s = document.getElementsByTagName('script')[0];
    g.text = 'CONFIG.LAYOUT.THUMBS_PER_ROW.MAX = 16;' +
        "page_refresh = function() { if($('.main-message').text().indexOf('Das Bild wurde als') == -1 && $('.thumb').length > 0) $(window).resize(); else setTimeout(page_refresh, 50)}\r\n" +
        'page_refresh();\r\n';
    s.parentNode.insertBefore(g, s);
})();
