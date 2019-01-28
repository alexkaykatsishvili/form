;(function($) {
    "use strict";

    Vue.use(VeeValidate);
    Vue.use(VueTheMask);

    const form = new Vue({
        el: '#form',
        data() {
            return {
                step: 1,
            }
        },
        methods: {
            prev() {
                this.step--;
            },
            next() {
                this.step++;
            },
            stepTo(n) {
                this.step = n;
            }
        }
    });

    $("#estimate").on("click", function(){
        $("#form").show();
    });
    
    $(".form__close").on("click", function(){
        $("#form").hide();
    });

    JsBarcode("#barcode", "DEC2018-{Dynamic ZIP}*{Floor_number}");
})(jQuery);