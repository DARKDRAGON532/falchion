chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ method: "POST" });
});