import $ from 'jquery'
import 'jquery-ui/ui/widgets/accordion'

// body trigger for lock
$(document).on("lock", function (e, data) {
    $("body").addClass("body--lock");
});
$(document).on("unlock", function (e, data) {
    $("body").removeClass("body--lock");
});

$( function() {
    $( "#accordion" ).accordion({
        active: 1,
        collapsible: false,
        heightStyle: "content"
    });
} );