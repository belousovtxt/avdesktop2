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


