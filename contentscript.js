/*
 * Copyright (c) 2017 Enzo Wang. Released under MIT license, see LICENSE file.
 */

var finalKeywordList = "";

(function GetKeywords() {
  var queryClass = "";
  var keywordList;
  var tmpList = "";

  if (document.location.href.match(/http[s]\:\/\/www\.shutterstock\.com/)) {
    //alert("Shutterstock site");
    queryClass = ".btn-search-pill";
  } 
  keywordList = document.body.querySelectorAll(queryClass);

  for (var i = 0; i < keywordList.length; i++) {
    var tmp = keywordList[i].innerHTML + ", ";
    tmpList += tmp;
  }
  finalKeywordList = tmpList.substring(0, tmpList.length - 2);
})();

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    if (request.action == "[From bg] show keywords") {
      //alert("Keywords: " + finalKeywordList);
      chrome.runtime.sendMessage({action: "[From cs] keywords", keywords: finalKeywordList}, 
        function(response) { });
    }
});

