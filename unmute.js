// ==UserScript==
// @name         Discord Video Audio Unmute
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Force unmute video elements in Discord browser client
// @author       ChatGPT
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function unmuteVideos() {
        const videos = document.querySelectorAll('video');

        videos.forEach((video) => {
            if (video.muted || video.volume < 1.0) {
                video.muted = false;
                video.volume = 1.0;
                console.log('[Discord Audio Unmute] Unmuted video:', video);
            }
        });
    }

    // Run once on load
    unmuteVideos();

    // Run every 2 seconds to catch dynamic changes
    setInterval(unmuteVideos, 2000);
})();
