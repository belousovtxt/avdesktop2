import $ from 'jquery'

$(document).on("click", ".inputs__switcher", function (e) {
    e.preventDefault();
    let oldFrom = $(this).closest(".inputs").find("[name='from']");
    let oldTo = $(this).closest(".inputs").find("[name='to']");

    let tempFromVal = oldFrom.val();
    let tempToVal = oldTo.val();
    oldFrom.val(tempToVal);
    oldTo.val(tempFromVal);



});