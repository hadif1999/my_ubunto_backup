window.autoUnmuteEnabled = !window.autoUnmuteEnabled;
window.AutoUnmuteInject = window.AutoUnmuteInject || class AutoUnmuteInject {
    initialize() {
        if (window.autoUnmuteEnabled) {
            this.createAutoUnmuteBanner();
            this.checkMuting();
        }
        else {
            this.removeAutoUnmuteBanner();
        }
    }
    checkMuting() {
        if (!window.autoUnmuteEnabled) {
            return;
        }
        try {
            const btn = this.btnMic;
            if (btn) {
                const isMuted = btn.getAttribute("data-is-muted") != "false";
                if (isMuted) {
                    this.sendUnmuteKeyCommand();
                }
            }
        }
        catch (e) {
        }
        window.setTimeout(() => this.checkMuting(), 500);
    }
    sendUnmuteKeyCommand() {
        const e = new KeyboardEvent("keydown", {
            key: "d",
            ctrlKey: true,
        });
        document.dispatchEvent(e);
    }
    createAutoUnmuteBanner() {
        const div = document.createElement("div");
        div.id = "auto-unmute-banner";
        div.style.cssText = "position: fixed; top: 1rem; left: 1rem; padding: 0 .2rem; background: white; z-index: 100;";
        div.innerHTML = `
<div style="margin: .2rem">${chrome.i18n.getMessage("ActiveBanner")}</div>
<a class="lnk-hide" style="display: block; margin: .2rem; cursor: pointer;">
    ${chrome.i18n.getMessage("Hide")}
</a>
<a class="lnk-stop" style="display: block; margin: .2rem; cursor: pointer;">
    ${chrome.i18n.getMessage("Stop")}
</a>`;
        div.querySelector(".lnk-hide").addEventListener("click", () => this.removeAutoUnmuteBanner());
        div.querySelector(".lnk-stop").addEventListener("click", () => this.onStopButtonClick());
        document.body.appendChild(div);
    }
    onStopButtonClick() {
        window.autoUnmuteEnabled = false;
        this.removeAutoUnmuteBanner();
    }
    removeAutoUnmuteBanner() {
        const banner = document.querySelector("#auto-unmute-banner");
        if (banner) {
            banner.remove();
        }
    }
    get btnMic() {
        const container = document.querySelector("[data-show-phone-audio-toasts]");
        if (container) {
            return container.querySelector("[role=button]");
        }
        else {
            return null;
        }
    }
};
new window.AutoUnmuteInject().initialize();
//# sourceMappingURL=inject.js.map