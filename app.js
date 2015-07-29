/**
 * Created by Maen Terawasi on 29/07/2015.
 */
(function(){
    var app = angular.module('store', [ ]);

    /*--- creating store controller ---*/
    app.controller('StoreController', function () {
        /*--- set property of this controller to equals gem variable ---*/
        this.products = gems;
    });

    /*--- gem variable ---*/
    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "This is a cool gem!",
            canPurchase: true,
            soldOut: true,
            image: "img/3.jpg",
            descriptions: "This was made using diamonds.",
            specifications: "1 Diameter in length and 3 km in width.. thats all.",
            reviews: "..."
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "This is a cool gem!",
            canPurchase: true,
            soldOut: true,
            image: "img/2.jpg",
            descriptions: "This was made using diamonds.",
            specifications: "1 Diameter in length and 3 km in width.. thats all.",
            reviews: "..."
        }
    ];

    app.controller("PanelController", function () {
        this.tab = 1;

        this.selectedTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
    });

})();
