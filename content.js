var currentURL = location.href;
console.log(currentURL);
fetch(chrome.extension.getURL('/siteData.json'))
     .then((resp) => resp.json())
     .then(function (jsonData) {
         console.log(jsonData)
     });

