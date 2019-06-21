import $ from 'jquery'

$(document).on("click", ".action--fill", function (e) {
    e.preventDefault();
    $(this).find(".dropdown__peoples").addClass("dropdown__peoples--opened");
});
$(document).on("click", ".action--fill .js-close-popup", function (e) {
    e.preventDefault();
    $(this).closest(".action").find(".dropdown__peoples").removeClass("dropdown__peoples--opened");
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".dropdown__peoples"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass("dropdown__peoples--opened");

    }
});