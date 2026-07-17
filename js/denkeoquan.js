const den = document.getElementById("lantern");

const anh = document.querySelectorAll(".face img");


anh.forEach(function (image) {

    image.addEventListener("mouseenter", function () {

        den.style.animationPlayState = "paused";

    });


    image.addEventListener("mouseleave", function () {

        den.style.animationPlayState = "running";

    });


});