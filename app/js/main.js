;
(function($) {
    "use strict";

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
            }
        }
    });

    JsBarcode("#barcode", "DEC2018-{Dynamic ZIP}*{Floor_number}");
})(jQuery);