import $ from "jquery";


let elBackLink = document.querySelector(".back")

if (elBackLink) {
    elBackLink.addEventListener('click', (e) => {
        e.preventDefault()
        window.history.back()
        console.log("back")
    })
}


// дропдаун на мобилках catalog.html
$(document).on("click", ".form__search-catalog", function (e) {
    e.preventDefault();

    if ($(this).hasClass("js-form__search")) {
        //remove
        if ($(e.target).hasClass('js-form__search')) {
            $(this).removeClass("js-form__search");
        }
    } else {
        //add
        $(this).toggleClass("js-form__search");
    }
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".js-form__search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass("js-form__search");

    }
});


$(document).on("click", ".head__subpages-item", function (e) {
    if($(document).width() < 1200) { //Condition for mobile double-click.
        if ($(this).parent().hasClass("js-head__subpages-links")) {
            if($(e.target).hasClass("head__subpages-active")) {

                e.preventDefault();
                $(this).parent().removeClass("js-head__subpages-links");
            }else{
                return true;
            }
        } else {

            e.preventDefault();
            $(this).parent().addClass("js-head__subpages-links")

        }
    }
    // e.preventDefault();

});


