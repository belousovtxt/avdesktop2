import $ from 'jquery'

$(document).on("click", ".dropdown__sort--selected", function (e) {
    e.preventDefault();
    if($(this).closest(".dropdown__sort").find(".dropdown__sort--items").hasClass("dropdown__sort--opened")) {
        $(this).closest(".dropdown__sort").find(".dropdown__sort--items").removeClass("dropdown__sort--opened");
    }else {
        $(this).closest(".dropdown__sort").find(".dropdown__sort--items").addClass("dropdown__sort--opened");
        $(this).closest(".dropdown__sort").find(".dropdown__sort--items .item").on("click", function (e) {
            e.preventDefault();
            $(this).closest(".dropdown__sort--items").find(".item--selected").removeClass("item--selected");
            $(this).addClass("item--selected");
        })

    }


});


$(document).on("click", ".only-months__head", function (e) {
    e.preventDefault();
    if($(e.target).hasClass("arr-left") || $(e.target).parent().hasClass("arr-left") || $(e.target).closest("div").hasClass("arr-left")) {
        $(this).find("span").text((+$(this).find("span").text() - 1))
    }
    if($(e.target).hasClass("arr-right") || $(e.target).parent().hasClass("arr-right") || $(e.target).closest("div").hasClass("arr-right")) {
        $(this).find("span").text((+$(this).find("span").text() + 1))
    }

});
