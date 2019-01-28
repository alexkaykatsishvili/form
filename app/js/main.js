;(function($) {
    "use strict";

    Vue.use(VeeValidate);
    Vue.use(VueTheMask);

    const form = new Vue({
        el: '#form',
        data() {
            return {
                step: 2,
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

    JsBarcode("#barcode", "DEC2018-{Dynamic ZIP}*{Floor_number}");
})(jQuery);