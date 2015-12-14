
var OUT_OPACITY = 1.0;
var OVER_OPACITY = 0.0;

$(function() {
    $("div.container_index ul li").css("opacity", OUT_OPACITY)
        .hover(
            function () {
                $(this).find(".noir").animate({opacity:OVER_OPACITY});
                $(this).find("h3").animate({opacity:OUT_OPACITY});                     
            },
            function () {
                $(this).find(".noir").animate({opacity:OUT_OPACITY});
                $(this).find("h3").animate({opacity:OVER_OPACITY});
            }
        );
    });


