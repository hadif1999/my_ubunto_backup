class BackgroundPage {
    initialize() {
        chrome.browserAction.onClicked.addListener(() => {
            chrome.tabs.create({
                url: "main.html",
            });
        });
    }
}
new BackgroundPage().initialize();
//# sourceMappingURL=background.js.map