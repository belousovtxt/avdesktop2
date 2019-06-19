import $ from 'jquery'
import "jquery-ui/ui/widgets/datepicker"
$(document).on("click", ".input-wrap", function (e) {
    e.preventDefault();


    if ($(this).find(".dropdown").length) {

        if ($(".input-wrap.js-dropdown--opened").length > 0) {
            $(".input-wrap.js-dropdown--opened .dropdown").fadeOut();
            $(".input-wrap.js-dropdown--opened").removeClass("js-dropdown--opened");
        }

        const mainEl = $(this);
        if (!$(this).hasClass("js-dropdown--opened")) {
            // Dropdown is HIDDEN
            $(this).addClass("js-dropdown--opened");
            $(this).find(".dropdown").fadeIn();

            $(this).on("click", ".js-dropdown__selectable", function (y) {
                y.preventDefault();
                mainEl.find("input").val($(this).find(".main").text());
                $(this).parent().find(".item--selected").removeClass("item--selected");
                $(this).addClass("item--selected")

            });

        } else {
            // Dropdown is OPEN


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

$( "#datepicker" ).datepicker({
    showWeek: true,
    firstDay: 1
});