import $ from "jquery";
import "slick-carousel";

export function slick_slider() {
    $(".slider").slick({
        variableWidth: true,
        speed: 700,
        dots: true,
        infinite: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false

                }
            }
        ]
    });
}