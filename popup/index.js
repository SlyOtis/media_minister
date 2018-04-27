function main() {
    var hostr = document.getElementById("host_radarr");
    var keyr = document.getElementById("key_radarr");
    var hosts = document.getElementById("host_sonarr");
    var keys = document.getElementById("key_sonarr");

    chrome.storage.sync.get(['hostr', 'keyr', 'hosts', 'keys'], function(result) {
        hostr.value = result.hostr || null;
        keyr.value = result.keyr || null;
        hosts.value = result.hosts || null;
        keys.value = result.keys || null;
    });

    hostr.addEventListener("input", function (evt) {
        chrome.storage.sync.set({hostr: evt.srcElement.value});
    });

    keyr.addEventListener("input", function (evt) {
        chrome.storage.sync.set({keyr: evt.srcElement.value});
    });

    hosts.addEventListener("input", function (evt) {
        chrome.storage.sync.set({hosts: evt.srcElement.value});
    });

    keys.addEventListener("input", function (evt) {
        chrome.storage.sync.set({keys: evt.srcElement.value});
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    main();
});