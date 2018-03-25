var currentURL = location.href;
console.log(currentURL);
console.log(siteData);

//console.log(siteData);

/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.cmd == "any command") {
        sendResponse({ result: "any response from background" });
      } else {
        sendResponse({ result: "error", message: `Invalid 'cmd'` });
      }
      // Note: Returning true is required here!
      //  ref: http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
      return true; 
    });*/
    /*chrome.extension.sendRequest({greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });*/
    /*chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        alert("message received");
    });*/
    
   

