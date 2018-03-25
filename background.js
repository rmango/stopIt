fetch(chrome.extension.getURL('/siteData.json'))
    .then((resp) => resp.json())
    .then(function (jsonData) {
        console.log(jsonData);
        //make list of urls
        /*for (var k = 0; k < jsonData.length; k++) {
            var siteEl = document.createElement("DIV");
            siteEl.innerHTML = jsonData[k].url;
            document.getElementById("list").appendChild(siteEl);
            console.log("element created");
        }*/
        //put list of urls into table
        for (var k = 0; k < jsonData.length; k++) {
            var siteEl = document.createElement("tr");

            var urlEl = document.createElement("th");
            urlEl.innerHTML = jsonData[k].rootUrl;
            siteEl.appendChild(urlEl);

            var startEl = document.createElement("th");
            startEl.innerHTML = jsonData[k].startTime.toString();
            siteEl.appendChild(startEl);

            var endEl = document.createElement("th");
            endEl.innerHTML = jsonData[k].endTime.toString();
            siteEl.appendChild(endEl);

            document.getElementById("list").appendChild(siteEl);
            console.log("element created");
        }
        //add 


    });




