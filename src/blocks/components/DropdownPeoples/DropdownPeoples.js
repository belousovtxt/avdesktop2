import $ from "jquery";

$(document).on("click", ".action--fill .action__caller", function (e) {
    e.preventDefault();
    $(this).parent().find(".dropdown__peoples").toggleClass("dropdown__peoples--opened");
});


$(document).on("click", ".action--fill .js-close-popup", function (e) {
    e.preventDefault();
    $(this).closest(".action").find(".dropdown__peoples").removeClass("dropdown__peoples--opened");
});

$(document).on("click", ".dropdown__peoples .js-fill-people", function (e) {
    if($(e.target).hasClass("js-delete-people") || $(e.target).parent().hasClass("js-delete-people")) {
        alert("delete people");
    }else{
        let thisPassengerData = $(this).data("passenger");
        let self = $(this);
        $.each(thisPassengerData, function (i, key) {
            self.closest(".card--people").find("[name^='"+i+"']").prop("value", ''+key+'');
        });
    }
    $(this).closest(".action").find(".dropdown__peoples").removeClass("dropdown__peoples--opened");
});

$(document).on("click", function (e) {
    console.log(e.target);
    if(!$(e.target).closest(".action--fill").length) {
        $(".dropdown__peoples").removeClass("dropdown__peoples--opened");
    }
});
