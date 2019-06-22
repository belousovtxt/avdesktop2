import $ from 'jquery'
import 'owl.carousel'

$(function () {
    $(".owl-carousel").owlCarousel({
        // items: 3,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            1170: {
                items: 3,
            }
        }
    });
});