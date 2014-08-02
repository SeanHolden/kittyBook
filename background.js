// Sean Holden
// Kitty Book - Leeds Hack submission - not intended to be taken seriously

var CLICKED = false;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  // only allow it to be clicked once (as it starts polling...)
  if(CLICKED===false){
    // No tabs or host permissions needed!
    chrome.tabs.executeScript(null, {file: "bettaScript.js"});
    CLICKED = true;
  };

});
