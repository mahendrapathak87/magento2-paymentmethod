define(['Magento_Payment/js/view/payment/cc-form'],function(component){
    'use strict';

    return component.extend({
        defaults:{
            template:'Pronko_Authorizenet/payment/cc-form',
            code: 'pronko_authorizenet'
        },
        /**
         * Get code
         * @returns {String}
         */
        getCode: function () {
            return this.code;
        },

        isActive: function(){
            return this.getCode() === this.isChecked();
        }

    });

});