import $ from 'jquery'

// body trigger for lock
$(document).on("lock", function (e, data) {
    $("body").addClass("body--lock");
});
$(document).on("unlock", function (e, data) {
    $("body").removeClass("body--lock");
});