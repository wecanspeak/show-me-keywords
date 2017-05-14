/*
 * Copyright (c) 2017 Enzo Wang. Released under MIT license, see LICENSE file.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage( tab.id,
      {action: "[From bg] show keywords"},
      function(response) {});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "[From cs] keywords") {
      alert(request.keywords);
    }
});

