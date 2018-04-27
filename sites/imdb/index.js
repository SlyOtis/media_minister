function initUser() {

}
function initList() {

}
function main() {

    alert([0]);
}
chrome.storage.sync.get(['keys', 'hosts', 'hostr', 'keyr'], function(items) {
    //TODO:: ADD popup opener chrome.tabs.create({url : "popup.html"});
    if (items.keys && items.hosts && items.hostr && items.keyr) main();
});