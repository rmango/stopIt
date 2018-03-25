var urlEntry = document.getElementById("urlEntry");
//urlEntry.setAttribute("type", "text");
//urlEntry.setAttribute("placeholder", "example.com");

var timeStart = document.getElementById("alarmTimeStart");
//timeStart.setAttribute("type", "time");

var timeEnd = document.getElementById("alarmTimeEnd");
//timeStart.setAttribute("type", "time");

document.getElementById("alarmButton").onclick = function() {
    console.log("hi");
    //get start and end times
    var msStart = document.getElementById('alarmTimeStart').valueAsNumber;
    var msEnd = document.getElementById('alarmTimeEnd').valueAsNumber;
    var msNow = new Date();
    var msTime = msNow.getTime();

    secTime = parseInt(msTime / 1000);
    secStart = parseInt(msStart / 1000);
    secEnd = parseInt(msEnd / 1000);

    window.setInterval(
        function () {
            secTime = secTime + 1;
            document.getElementById("secTimes").innerHTML = "You have " + secTime + " ms";
            if (secTime > secStart && secTime < secEnd) {
                document.getElementById("secTimes").innerHTML = "stop";
            }
        }, 1000);

    console.log(secTime);
    console.log(secStart);
    console.log(secEnd);
    //get url entered
    var newUrl = document.getElementById("urlEntry").value;
    console.log(newUrl);

    //enter all data into json object
    var toEnter = {
        "url": newUrl,
        "startTime": secStart,
        "endTime": secEnd
    }
    var data;
    fetch(chrome.extension.getURL('/siteData.json'))
     .then((resp) => resp.json())
     .then(function (jsonData) {
         jsonData.push(toEnter);
         console.log(jsonData);
         data = jsonData;
     });
    
    /*console.log(JSON.stringify(chrome.extension.getURL('/siteData.json')));
    var siteData = JSON.parse(chrome.extension.getURL('/siteData.json'));
    //siteData.push(toEnter);
    console.log(JSON.stringify(chrome.extension.getURL('/siteData.json')));
*/

// Save it using the Chrome extension storage API.
var value = data;
chrome.storage.local.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });
  chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
}

