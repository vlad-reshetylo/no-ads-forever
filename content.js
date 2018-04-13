(() => {
    const script = document.createElement('script');
    script.innerHTML = `console.log('window.stop successfully reassigned!');
    window.stop = () => { console.log('Ads script tried to ruin your page, but we stopped it!'); };`;

    const clearCheckers = () => {
        clearInterval(firstStyleCheckerId);
        clearInterval(checkerTimeout);
    };

    const firstStyleCheckerId = setInterval(() => {
        if(document.styleSheets.length !== 0){
            document.head.appendChild(script);
            clearCheckers();
        }
    }, 10);

    const checkerTimeout = setInterval(() => {
        clearCheckers();
    }, 1000 * 20);

    chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
        document.body.appendChild(script);
        clearCheckers();
    });
})();