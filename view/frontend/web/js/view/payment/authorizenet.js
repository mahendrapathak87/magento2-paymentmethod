define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function(component,rendererList){
        
        rendererList.push({
            type: 'pronko_authorizenet',
            component: 'pronko_authorizent/js/view/payment/method-renderer/cc-form'
        });

        return component.extend({});
    }
);