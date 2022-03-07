document.addEventListener("DOMContentLoaded",
function (event) {

fetch("https://api.nasa.gov/planetary/apod?api_key=rrihKYTOrMbHs1PB4QZKbSE6LYKKFOlSeTrVNGQX")
    .then(response => response.json())
    .then(planetary =>
        {
            document.getElementById("info").innerHTML = planetary.explanation
            document.getElementById("data").innerHTML = "Data:" + " " + planetary.date
            document.getElementById("photo").src = planetary.url
        })

    .catch(error => console.log(error));

});

