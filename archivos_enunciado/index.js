$(document).ready(function(){
    $("#setDoubleSize").dblclick(function(){
        let ancho = $("#divTarget").width(); 
        $("#divTarget").width(ancho * 2);
    });

    $("#setBlueColor").hover(
        function(){
            $(this).css("background-color", "blue");
        },
        function(){
            $(this).css("background-color", "white");    
        }
    );
    
    let isMoving = false;

    $("#mov").click(function(){
        if(!isMoving){
            $("#divTarget").animate({top: '+=50px'}, 3000);
            isMoving = true;
        } else {
            $("#divTarget").stop();
            $("#divTarget").css("top", "0px");
            isMoving = false;
        }
    });
    let counter = 1;

    $("#addDiv").click(
        function(){
        let texto = $("#text").val();
        let nuevoDiv = $("<div class='addDiv'>" + texto + " " + counter + "</div>");
        $("#domNodes").append(nuevoDiv);
        counter++;
    });

    $(document).on(
        "click", ".addDiv", function(){
        $(this).remove();
    });
    
    // Slider
    Slider();

    function Slider(){
    $("#slider").slick({
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        nextArrow:"<button class='boton'> NEXT </button>",
        prevArrow:"<button class='boton'> PREV </button>",
        responsive: [
            {
                breakpoint: 600,
                settings: { 
                    slidesToScroll: 1, 
                    slidesToShow: 1, 
                    arrows: false, 
                    dots: true, 
                    autoplay: false,
                }
            }
        ]
    });
}
});