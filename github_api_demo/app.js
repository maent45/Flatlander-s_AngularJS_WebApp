/**
 * Created by Maen Terawasi on 29/07/2015.
 */
(function(){
    var app = angular.module('store', [ ]);

    app.factory('testService', function($http) {
        var testService = function(){
            var promise = $http.get('https://api.github.com/users?since=135').then(function(response){
                //console.log(response.data);
                return response.data;
            })
            return promise;
        }
        return testService;
    })


    /*--- creating store controller ---*/
    app.controller('StoreController', function ($scope,testService) {
        /*--- set property of this controller to equals gem variable ---*/

        testService().then(function(response){
            console.log("returned data",response)
            $scope.products = response;
        })
    });



    /*--- gem variable ---*/
    /*var gems = [
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
    ];*/

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
