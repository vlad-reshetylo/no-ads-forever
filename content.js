(function(){
    var script  = document.createElement('script');
    script.innerHTML = "console.log('window.stop successfully reassigned!');window.stop = function(){console.log('Ads script tried to ruin your page, but we stopped it!')};console.log('window.stop successfully reassigned!');";

    var clearCheckers = function () {
        clearInterval(firstStyleCheckerId);
        clearInterval(checkerTimeout);
    };

    var firstStyleCheckerId = setInterval(function () {
        if(document.styleSheets.length !== 0){
            document.head.appendChild(script);
            clearCheckers();
        }
    }, 10);

    var checkerTimeout = setInterval(function () {
        clearCheckers();
    }, 1000 * 20);

    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        document.body.appendChild(script);
        clearCheckers();
    });
})();