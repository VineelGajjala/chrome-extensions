"use strict";

const __removeProtocol = (url) => url.replace(/^http(s?):\/\//, "");
const __removeWww = (url) => url.replace(/^www\./, "");
const __removeTrailingSlash = (url) => url.indexOf("/") != -1 ? url.slice(0, url.indexOf("/")) : url;

//remove everything after first /

// "https://www.youtube.com/" => "youtube.com"
// "https://www.youtube.com/feed/explore" => "youtube.com/feed/explore"
// "https://music.youtube.com/" => "music.youtube.com"
// "https://music.youtube.com/explore" => "music.youtube.com/explore"
const normalizeUrl = (url) => [url]
  .map(__removeProtocol)
  .map(__removeWww)
  .map(__removeTrailingSlash)
  .pop();


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    const url = changeInfo.pendingUrl || changeInfo.url;
    const norm = normalizeUrl(url);
    //alert(norm);
    const bannedSites = [];
    bannedSites.push("youtube.com");
    bannedSites.push("twitter.com");
    bannedSites.push("pokemonshowdown.com")

    for (const site of bannedSites) {
      if (site == norm) {
        chrome.tabs.remove(tabId);
      }
    }
})