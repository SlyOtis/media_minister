function registerPageScript(urlToMatch, scriptUri) {
    chrome.webNavigation.onDOMContentLoaded.addListener(function() {
        /*chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0], {code: 'alert("penis")'});
        });*/
        chrome.tabs.executeScript({
            code: 'alert("test")'
        });
    }, {url: [{urlMatches : urlToMatch}]});
}

registerPageScript('https://www.imdb.com/*', 'sites/imdb/index.js');
registerPageScript('https://trakt.tv/*', 'sites/trakt/index.js');