document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value / 300;
        var y = e.clientY * moving_value / 550;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll("#play").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value / 300;
        var y = e.clientY * moving_value / 550;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}