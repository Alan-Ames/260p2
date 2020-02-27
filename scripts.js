document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    //debugger
    let url="https://api.aerisapi.com/sunmoon/moonphases/"
    let id="vmKnfBf8mVqO1Rp4B5RB6"
    let secret = "n5L1HlJpbAIuzV05YUWgaUBow6c3OyVQw3guPzTp"
    let city=document.getElementById("city").value
    let state=document.getElementById("state").value
    url+=city+","+state+"?client_id="+id+"&client_secret="+secret
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let phase=json.response[0].name;
            let p=""
            if(phase==="first quarter"){
                p='./firstQuarter.jpg'
            }
            if(phase==="last quarter"){
                p=".lastQuarter.jpg"
            }
            if(phase==="new moon"){
                p="./newMoon.jpg"
            }
            if(phase==="full moon"){
                p='./fullMoon.jpg'
            }
            let results='<img src="'+p+'"/>'
            document.getElementById('results').innerHTML=results;
            return json;
        });

});