chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.cmd) {
        case 'start': {
            sendResponse({count: 25});
            break;
        }
        default: {
            sendResponse({error: "Invalid command"})
            break;
        }
    }
});