document.getElementById('test').textContent = "test";
fetch(chrome.extension.getURL('/siteData.json'))
     .then((resp) => resp.json())
     .then(function (jsonData) {
         console.log(jsonData);
     
    });
/*console.log(siteData);
for(var k = 0; k < siteData.length; k++) {
    var siteEl = document.createElement("DIV");
    siteEl.innerHTML = siteData[k].url;
    document.getElementById("list").appendChild(siteEl);
    console.log("element created");
}*/
    
   

