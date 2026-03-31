chrome.storage.local.get(["data"], (result) => {
    let data = result.data || {};
    let list = document.getElementById("list");

    for (let site in data) {
        let li = document.createElement("li");

        let seconds = Math.floor(data[site] / 1000);
        li.textContent = `${site}: ${seconds}s`;

        list.appendChild(li);
    }
});

const productiveSites = ["github.com", "leetcode.com"];
const unproductiveSites = ["youtube.com", "instagram.com"];

function getCategory(site) {
    if (productiveSites.includes(site)) return "✅ Productive";
    if (unproductiveSites.includes(site)) return "❌ Unproductive";
    return "⚪ Neutral";
}

chrome.storage.local.get(["data"], (result) => {
    let data = result.data || {};
    let list = document.getElementById("list");

    for (let site in data) {
        let li = document.createElement("li");

        let seconds = Math.floor(data[site] / 1000);
        let category = getCategory(site);

        li.textContent = `${site}: ${seconds}s (${category})`;

        list.appendChild(li);
    }
});