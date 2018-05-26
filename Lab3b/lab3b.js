"use strict";
var map;
//if not initialized, it is undefined and is not recognized as arrays sp you can't push or pop
var addresses = []; // defined empty array
var mapMarkers = []; // defining an array of MapMarker object & initializing it
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
        this.Coordinates = { lat: 0, lng: 0 };
    }
    ;
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function (data) {
        //data is an array of objects in this context
        //we could assign it directly but it is assigned by reference. Hence it affects both simultaneously
        //hence duplicating by for loop
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            addresses.push(cl);
        }
        for (var _a = 0, addresses_1 = addresses; _a < addresses_1.length; _a++) {
            var i = addresses_1[_a];
            var newMapMarker = new MapMarker(i.address + ", Toronto, Canada");
            mapMarkers.push(newMapMarker);
        }
    }
});
function initMap() {
    var geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("map"), {
        center: Toronto,
        zoom: 8
    });
    //    addMarker(Toronto);
    //    getLatLng("1 Yonge Street Toronto, Ontario, Canada");
    for (var _i = 0, addresses_2 = addresses; _i < addresses_2.length; _i++) {
        var cl = addresses_2[_i];
        var latlng = { lat: cl.lat, lng: cl.lon };
        var newMapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }
    //let markersIndex: number = 0;
    for (var i = 0; i < 10; i++) {
        // setTimeout(() => {}, 1000);
        setLatitudeLongitude(i);
        // console.log(mapMarkers[i].Coordinates)
        addMarker(mapMarkers[1].Coordinates);
    }
    function setLatitudeLongitude(markersIndex) {
        //assigns lat and long for each map marker
        mapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);
        //    setTimeout(() => {console.log(mapMarkers[markersIndex])}, 1000);
        console.log(mapMarkers[markersIndex].Coordinates);
    }
    function getLatLng(address) {
        geocoder.geocode({ address: address }, function (results, status) {
            //console.log(status)
            if (status === 'OK') {
                console.log('Latitude : ' + results[0].geometry.location.lat());
                console.log('Longitude : ' + results[0].geometry.location.lng());
                var coord = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                };
                // console.log(coord);
                return coord;
            }
            else {
                console.log('In else');
                setInterval(getLatLng(address), 2000);
            }
        });
    }
    function addMarker(coord) {
        //will place mapmarker based on coordinates
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: "A cool place to be"
        });
    }
}
