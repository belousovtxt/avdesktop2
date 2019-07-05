import $ from 'jquery'
import "jquery-ui/ui/widgets/datepicker"
import "jquery-ui/ui/i18n/datepicker-ru"

/*
$(document).on("click", ".input-wrap", function (e) {
    e.preventDefault();
    let mainEl = $(this);

    $(document).find("js-dropdown--opened").find(".dropdown").fadeOut();
    $(document).find("js-dropdown--opened").removeClass("js-dropdown--opened");

    if ($(this).find(".dropdown").length) {
        if (!$(this).hasClass("js-dropdown--opened")) {
            // Dropdown is HIDDEN
            $(this).addClass("js-dropdown--opened");
            $(this).find(".dropdown").fadeIn();

            $(this).one("click", ".js-dropdown__selectable", function (y) {
                y.preventDefault();
                mainEl.find("input").val($(this).find(".main").text());
                $(this).parent().find(".item--selected").removeClass("item--selected");
                $(this).addClass("item--selected");
                $(this).closest(".js-dropdown--opened").removeClass("js-dropdown--opened");
                $(".input-wrap.js-dropdown--opened .dropdown").fadeOut();
                console.log("close");

            });

        } else {
            // Dropdown is OPEN
            // console.log("drop is open");

        }
    }
});
*/

$(document).on("click", ".input-field", function (e) {
    if(!$(this).find("input").prop("disabled")) {
        $(this).parent().toggleClass("js-dropdown--opened");
    }
});



$(document).on("click", ".search__from .js-dropdown__selectable, .search__to .js-dropdown__selectable", function (e) {
    $(this).parent().find(".item--selected").removeClass("item--selected");
    $(this).addClass("item--selected");
    $(this).closest(".input-wrap").find(".input-field input").val($(this).find(".main").text());
    $(this).closest(".input-wrap").removeClass("js-dropdown--opened");
});

$(document).on("click", function (e) {
    if(!$(e.target).parent().hasClass("input-field") && !$(e.target).hasClass("input-field")) {
        //По правилам юзабилити: всё должно закрываться от туда, откуда появилось
        //Нам нужно определить, куда кликнул пользователь. Если пользователь кликнул не по дропдауну и не по его коненту, то мы закрываем дропдаун
        if(!$(e.target).closest(".dropdown").length) {
            if(!$(e.target).closest(".ui-datepicker-header").length){
                $(".js-dropdown--opened").removeClass("js-dropdown--opened")
            }
        }
    }
    else {
        if($(".js-dropdown--opened").length > 1) {
            let thisDropdown = $(e.target).closest(".js-dropdown--opened");
            $(".js-dropdown--opened").not(thisDropdown).removeClass("js-dropdown--opened");
            console.log("more that one");
        }
    }

    if(!$(e.target).closest(".dropdown__sort").length) {
        $(".dropdown__sort--opened").removeClass("dropdown__sort--opened")
    }

});
$("#datepicker").datepicker({
    firstDay: 1,
    altField: "[name=date]",
    dateFormat: 'dd MM',
    minDate: new Date(),
    onSelect: function (data) {
        $("#datepicker").closest(".input-wrap").removeClass("js-dropdown--opened");
    }
}, $.datepicker.regional[ "ru" ]);


$(document).on("stepper-update", function (e, selector) {
    if(selector.length) {
        if(selector.hasClass("search__passengers")) {
            let allPassengers = 0;
            selector.find(".stepper").map(function (key, value) {
                allPassengers += +$(value).find(".stepper__value input").val();
            });
            selector.find(".input-field input").val(allPassengers + " пассажиров");
        }
    }

});


/*
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".dropdown"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
        div.closest(".js-dropdown--opened").removeClass("js-dropdown--opened")
    }
});*/


// $(document).mouseup(function (e){ // событие клика по веб-документу
//     var div = $(".dropdown__sort--items"); // тут указываем ID элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         && div.has(e.target).length === 0) { // и не по его дочерним элементам
//           div.removeClass("dropdown__sort--opened");
//
//     }
// });