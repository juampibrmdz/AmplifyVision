function playVideo() {
    var video = document.getElementById("myVideo");
    var overlay = document.querySelector(".vsl-overlay");

    // Oculta la imagen de portada y el botón de play
    overlay.style.display = "none";

    // Muestra el video y reproduce
    video.style.display = "block";
    video.play();
}
