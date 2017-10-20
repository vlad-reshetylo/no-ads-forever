chrome.webRequest.onBeforeRequest.addListener (
    function (details) { 
        chrome.tabs.sendMessage(details.tabId, {content: "message"}, function (response){
            // do nothing
        });           

        var startTime = new Date().getTime();
        var randNumber;

        while ((new Date().getTime() - startTime) < 5000){
            randNumber = Math.random(); // because an error can happen if this block is empty, or needless
        }

        return {
            cancel : (randNumber + 1) > 0 // always true
        };
    },
    {urls: ["*://*.piguiqproxy.com/*"]},
    ["blocking"]
);