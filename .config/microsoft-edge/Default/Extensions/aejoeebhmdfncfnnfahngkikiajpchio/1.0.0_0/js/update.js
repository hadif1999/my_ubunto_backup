var ExtUpdateConf = {
    installUrl: "https://timer.freefinancetools.net/welcome",
    uninstallUrl: "https://timer.freefinancetools.net/uninstall"
};

class ExtUpdate {
    async initializeAsync() {
        chrome.runtime.onInstalled.addListener(
            (details) => this.onInstalled(details));



        if (ExtUpdateConf.uninstallUrl) {
            chrome.runtime.setUninstallURL(`${ExtUpdateConf.uninstallUrl}`);
        }
    }

    onInstalled(details) {
        if (ExtUpdateConf.installUrl && details.reason == "install") {  
            chrome.tabs.create({
                url: ExtUpdateConf.installUrl,
            });
        }
    }
}

(function() {
    const extUpd = new ExtUpdate();
    extUpd.initializeAsync();
})();  