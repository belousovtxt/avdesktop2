import $ from 'jquery'
import "jquery-ui/ui/widgets/datepicker"
import "jquery-ui/ui/i18n/datepicker-ru"


$(document).on("click", ".input-wrap", function (e) {
    e.preventDefault();
    let mainEl = $(this);

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

/* Remove if click */
$(document).click(function (event) {
    if ($(event.target).closest(".input-wrap.js-dropdown--opened").length) return;
    $(".input-wrap.js-dropdown--opened .dropdown").fadeOut();
    $(".input-wrap.js-dropdown--opened").removeClass("js-dropdown--opened");
    event.stopPropagation();
});

$("#datepicker").datepicker({
    firstDay: 1,
    altField: "[name=date]",
    dateFormat: 'dd MM',
    minDate: new Date()
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