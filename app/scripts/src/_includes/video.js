(function() {
    var playButton = document.getElementById("play");
    var vid = document.getElementById("movie1");
    var body = document.body;
    var closeButton = document.getElementById("close");
    var logo = document.getElementById("logo");

    playButton.addEventListener("click", playVid);
    function playVid() {
        console.log("play");
        body.classList.add("active");
        vid.play();
    }

    closeButton.addEventListener("click", pauseVid);
    function pauseVid() {
        console.log("close");
        body.classList.remove("active");
        vid.pause();
    }
})();
