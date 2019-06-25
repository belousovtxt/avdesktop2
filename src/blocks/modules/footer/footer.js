import $ from 'jquery';

$(document).on("click", ".footer__col.footer__col-links p", function (e) {
    $(this).parent().toggleClass("footer__col-expanded");
});