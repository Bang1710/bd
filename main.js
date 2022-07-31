$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

var video = document.querySelector("#player");
function playvideo() {
    video.play();
}