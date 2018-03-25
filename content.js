var currentURL = location.href;
console.log(currentURL);
var value = [
    {
        "url": "https://www.instagram.com/",
        "startTime": 18,
        "endTime": 3
    }];
chrome.storage.local.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });
chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently' + result.key);
  });


//fetch siteData json object bc its a background script
fetch(chrome.extension.getURL('/siteData.json'))
     .then((resp) => resp.json())
     .then(function (jsonData) {
         console.log(jsonData);

        //loop through jsonData urls to see if urls match currentUrl
        var matchFound;
        var dataMatchFinalArr = [];
        for(var i = 0; i < jsonData.length; i++) {
            var currentDataUrl = jsonData[i].url;
            console.log(currentDataUrl);
            var pattern = /(\w?\d?)+\.(com|co|uk|us)/g;
            var dataMatchArr = pattern.exec(currentDataUrl);
            dataMatchFinalArr.push(dataMatchArr[0]);
        }
        console.log(dataMatchFinalArr);
        var matchIndx;
        for(var j = 0; j < dataMatchFinalArr.length; j++) {
            if(currentURL.includes(dataMatchFinalArr[j])) {
                matchFound = true;
                matchIndx = j;
                j = dataMatchFinalArr.length;
            }
        }
        //if url match found, block site
        var msNow = new Date();
        if(matchFound && j.startTime <= parseInt(msNow.getTime())/1000 && j.endTime >=x parseInt(msNow.getTime()/1000)){
            console.log("MATCH FOUND");
            //make everything invisible
            var elArr = document.getElementsByTagName("*");
            for(var m = 0; m < elArr.length; m++) {
                elArr[m].style.visibility = "hidden";
            }
            //inject own code
            //document.getElementsByTagName("BODY")[0].style.visibility = "visible";
        }
     });
