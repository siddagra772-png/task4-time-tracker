let currentTab = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    let tab = await chrome.tabs.get(activeInfo.tabId);
    
    if (currentTab !== "") {
        let timeSpent = Date.now() - startTime;

        saveTime(currentTab, timeSpent);
    }

    currentTab = new URL(tab.url).hostname;
    startTime = Date.now();
});

function saveTime(site, time) {
    chrome.storage.local.get(["data"], (result) => {
        let data = result.data || {};

        if (!data[site]) data[site] = 0;
        data[site] += time;

        chrome.storage.local.set({ data });
    });
}

function saveTime(site, time) {
    fetch("http://localhost:5000/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ site, time })
    });
}