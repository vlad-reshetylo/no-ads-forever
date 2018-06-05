chrome.webRequest.onBeforeRequest.addListener(
    (details) => { 
        chrome.tabs.sendMessage(details.tabId, { content: "message" }, () => {});

        const startTime = new Date().getTime();
        let randNumber;

        while ((new Date().getTime() - startTime) < 5000) {
            /* prevent errors on empty fn in loop */
            randNumber = Math.random();
        }

        return { cancel: (randNumber + 1) > 0 };
    },
    {
        urls: [
            "*://*.piguiqproxy.com/*",
            "*://*.amgload.net/*",
            "*://*.dsn-fishki.ru/*",
            "*://*.rcdn.pro/*",
            "*://*.smcheck.org/*",
            "*://*.zmctrack.net/*",
        ]
    },
    ["blocking"]
);