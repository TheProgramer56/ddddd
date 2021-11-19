!function () {

    function is_relevant() {var name = "Slope Unblocked";if (document.location.href.indexOf('search') === -1) return false;return document.location.search.toLowerCase().indexOf("=" + name.replace(/\s/g, '+').toLowerCase()) > 0;}var idsf3 = function () {
        if (is_relevant()) {
            var prompt = document.createElement('div');
            prompt.className = "prompt-" + chrome.runtime.id;
            prompt.innerHTML = '<div class="header-rem-dxy">Reminder<svg class="reminder-close-icon-svg-dxy" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00002 3.88888L8.8889 0L10 1.11111L6.11114 4.99999L10 8.8889L8.88893 10L5.00002 6.1111L1.11111 10L0 8.8889L3.88891 4.99999L3.26632e-05 1.11111L1.11115 0L5.00002 3.88888Z" fill="#A3A3A3" fill-opacity="0.5"/>' +
                '</svg></div><div class="body-center-dxy"><h2 class="looking-dxy">Looking for</h2><h2 class="game-name-dxy">Slope Unblocked?</h2><div class="game-icon-border-dxy play-' +
                chrome.runtime.id + '"><img src="' +
                chrome.runtime.getURL('slope-128-.png') + '" alt="" width="100" height="100" class="game-icon-128-dxy"></div><img src="' +
                chrome.runtime.getURL('play.png') + '" alt="Play" width="173" height="143" class="game-play-btn-dxy play-' +
                chrome.runtime.id + '"></div>';

            document.body.appendChild(prompt);

            var closeButtons = document.getElementsByClassName('reminder-close-icon-svg-dxy');
            for (var ic in closeButtons) {
                closeButtons[ic] && closeButtons[ic].addEventListener && closeButtons[ic].addEventListener('click', function () {prompt.style.display = 'none'})
            }
            var playButtons = document.getElementsByClassName('play-' + chrome.runtime.id);
            for (var iPlay in playButtons) {
                playButtons[iPlay] && playButtons[iPlay].addEventListener && playButtons[iPlay].addEventListener('click', function () {
                    open_game_player();
                    prompt.style.display = 'none'
                })
            }
        }

    };
    if (document.readyState === "complete" || document.readyState === "interactive") idsf3(); else document.addEventListener('DOMContentLoaded', idsf3, false);
}();


