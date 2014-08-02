// Sean Holden
// Facebook Roulette

var CLICKED = false;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  // No tabs or host permissions needed!
  if(CLICKED===false){
    chrome.tabs.executeScript(null, {file: "bettaScript.js"});
    CLICKED = true;
  }else{
    console.log('nope...');
  };

  
  
});
