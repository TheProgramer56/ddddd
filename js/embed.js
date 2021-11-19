/**
 * Embeding game player
 */


function loaded() {
    function addScriptHref(href, callback) {
        fetch(href).then(text => text.text()).then(code => {
            window.eval.apply(window, [code])
            callback()
        })
    }

    function addScript(code) {
        window.eval.apply(window, [code])
    }

    document.title = chrome.i18n.getMessage("title");
    document.body.innerHTML = '<div class="webgl-content"><div id="gameContainer" style="width: 800px; height: 660px; margin: auto"></div></div>';
    addScriptHref(chrome.runtime.getURL('js/UnityProgress.js'), function () {
        addScriptHref(chrome.runtime.getURL('js/unityloader41.js'), function () {
            var jsonFile = chrome.runtime.getURL('slope.json');
            addScript('var gameInstance = UnityLoader.instantiate("gameContainer", "' + jsonFile + '", {onProgress: UnityProgress,Module:{onRuntimeInitialized: function() {UnityProgress(gameInstance, "complete")}}});')
        });
    });
}

if (document.readyState === "complete" || document.readyState === "interactive") loaded(); else document.addEventListener('DOMContentLoaded', loaded, false);
document.title = 'Slope';
