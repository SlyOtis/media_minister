function initUser() {

}
function initList() {

}
function main() {

    chrome.tabs.executeScript({
        file: 'api/main.js'
    });

    var port = chrome.runtime.connect({name: "knockknock"});
    port.postMessage({joke: "Knock knock"});
    port.onMessage.addListener(function(msg) {
        if (msg.question === "Who's there?")
            port.postMessage({answer: "Madame"});
        else if (msg.question === "Madame who?")
            port.postMessage({answer: "Madame... Bovary"});
    });

}
chrome.storage.sync.get(['keys', 'hosts', 'hostr', 'keyr'], function(items) {
    //TODO:: ADD popup opener chrome.tabs.create({url : "popup.html"});
    if (items.keys && items.hosts && items.hostr && items.keyr) main();
});