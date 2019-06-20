import $ from 'jquery';

$(document).on("click", ".js-toggle-menu", ((e) => {
        $(document).trigger('toggle-menu', [$("header.header")]);
    })
);

$(document).on("toggle-menu", function (e, header) {
    console.log(e);
    console.log(header);

    if (header.hasClass("header__white")) {
        //header is open
        header.removeClass("header__white");
        $(document).trigger('unlock');

    } else {
        //header is hidden
        header.addClass("header__white");
        $(document).trigger('lock');

    }
})