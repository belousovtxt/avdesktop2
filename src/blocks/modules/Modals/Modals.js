import $ from 'jquery';
import "jquery-ui/ui/widgets/tabs"
// import 'jquery-modal'

$("#tabs").tabs();


$(document).on("click", ".js-set-tab-signup", function (e) {
    e.preventDefault();
    $("#login-form #tabs").tabs("option", "active", 1 );
});
