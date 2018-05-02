function initUser() {

}
function initList() {

}

function initWatchlist() {
    get("watchlist/header_action.html", function (data) {
        console.log(data);
        $(data).prependTo($("#center-1-react").find(".header-actions")[0]);
    });
}

function get(file, callback) {
    return $.get(chrome.extension.getURL("sites/imdb/" + file), callback);
}

function cmd(cmd, callback) {
    chrome.runtime.sendMessage(cmd, function (res) {
        if (res.error != null) {
            console.error(res.error);
        } else {
            callback(res);
        }
    });
}

function main() {

    var path = document.location.pathname.split("/");

    switch (path[1]) {
        case "user": {
            if (path.length >= 4) {
                switch (path[3]) {
                    case "watchlist" :{
                        initWatchlist();
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
            break;
        }
        case "list": {
            break;
        }
        default:
            return;
    }

    cmd({cmd: "start"}, function(res) {
        console.log(res);
    });
}

$(document).ready(function () {
    chrome.storage.sync.get(['keys', 'hosts', 'hostr', 'keyr'], function(items) {
        //TODO:: ADD popup opener chrome.tabs.create({url : "popup.html"});
        if (items.keys && items.hosts && items.hostr && items.keyr) main();

    });
});
