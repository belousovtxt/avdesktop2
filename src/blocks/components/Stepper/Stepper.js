import $ from 'jquery'

const STEPPER_MAX = 99;
const STEPPER_MIN = 1;

$(document).on("click", ".stepper__action", (function (e) {
        e.preventDefault();
        let action = $(this);
        let inputTarget = $(this).closest(".stepper").find("input");

        if($(this).hasClass("stepper__minus")) {
            //minus
            if(+inputTarget.val() > STEPPER_MIN) {
                inputTarget.val((+inputTarget.val()-1))
            }

        } else {
          //plus
            if(+inputTarget.val() < STEPPER_MAX) {
                inputTarget.val((+inputTarget.val()+1))
            }
        }
        $(document).trigger("stepper-update", [$(this).closest(".input-wrap"),find("input"), "342"]);
}));

