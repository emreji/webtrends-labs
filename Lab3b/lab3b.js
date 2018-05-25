"use strict";
var map;
var addresses;
var mapMarkers = []; // defining an array of MapMarker object & initializing it
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    ;
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
$.ajax({
    type: 'POST',
    url: 'AClocations.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        // for(let i of data){
        //     console.log(i.address);
        // }
        addresses = data;
        for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
            var i = addresses_1[_i];
            console.log(i.address);
            // add map marker to array of map markers
            var newMapMarker = new MapMarker(i.address); // using address constructor here
            mapMarkers.push(newMapMarker);
        }
        console.log(mapMarkers);
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Toronto,
        zoom: 8
    });
}
initMap();
