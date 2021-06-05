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

    addGlobalStyle(`
    #head {
        width: calc((15 * 4px) + (16 * 128px)) !important;
        padding: 0px !important;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.9);
    }
    #head-content {
        width: 1200px;
        background-color: transparent;
    }
    div.item-info {
        max-width: 1200px;
        margin: auto;
    }
    div.item-comments {
        max-width: 1200px;
        margin: auto;
    }`);

    var g = document.createElement('script');
    var s = document.getElementsByTagName('script')[0];
    g.text = `
    CONFIG.LAYOUT.THUMBS_PER_ROW.MAX = 16;
    page_refresh = function() { if($('.main-message').text().indexOf('Das Bild wurde als') == -1 && $('.thumb').length > 0) $(window).resize(); else setTimeout(page_refresh, 50)};
    page_refresh();
    `
    s.parentNode.insertBefore(g, s);
})();
