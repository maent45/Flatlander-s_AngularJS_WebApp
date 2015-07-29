/**
 * Created by Maen Terawasi on 29/07/2015.
 */
(function(){
    var app = angular.module('store', [ ]);

    /*--- creating store controller ---*/
    app.controller('StoreController', function(){
        /*--- set property of this controller to equals gem variable ---*/
        this.products = gems;
    });

    /*--- gem variable ---*/
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is a cool gem!',
            canPurchase: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'This is a cool gem!',
            canPurchase: false
        }
    ];

})();
