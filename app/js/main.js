;(function($) {
    "use strict";

    const form = new Vue({
        el: '#form',
        data() {
            return {
                step: 1,
                // zip: ''
            }
        },
        methods: {
            prev() {
                this.step--;
            },
            next() {
                this.step++;
            },
            stepUp(n) {
                this.step = n;
            }
        }
    });

    JsBarcode("#barcode", "DEC2018-{Dynamic ZIP}*{Floor_number}");
})(jQuery);