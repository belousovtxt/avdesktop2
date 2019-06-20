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