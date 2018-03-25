var currentURL = location.href;
console.log(currentURL);
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
        for(var j = 0; j < dataMatchFinalArr.length; j++) {
            if(currentURL.includes(dataMatchFinalArr[j])) {
                matchFound = true;
                j = dataMatchFinalArr.length;
            }
        }
        //if url match found, block site
        if(matchFound) {
            console.log("MATCH FOUND");
            //make everything invisible
            document.getElementsByTagName("BODY")[0].style.visibility = "hidden";
            //inject own code
        }
     });
