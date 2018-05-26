let map: any;
//if not initialized, it is undefined and is not recognized as arrays sp you can't push or pop
let addresses : any[] = []; // defined empty array
let mapMarkers : MapMarker[] = []; // defining an array of MapMarker object & initializing it

// interface
interface LatLng {
    lat: number,
    lng: number
}

class MapMarker{
    Address: string;
    Coordinates : LatLng;

    public constructor(address: string){
      this.Address = address;
      this.Coordinates = {lat: 0, lng: 0};
    };
}

let Toronto : LatLng = { lat: 43, lng: -79.38 };

$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function(data) {
        //data is an array of objects in this context
        //we could assign it directly but it is assigned by reference. Hence it affects both simultaneously
        //hence duplicating by for loop
        for(let cl of data) {
            addresses.push(cl);
        }
        for(let i of addresses) {
            let newMapMarker : MapMarker = new MapMarker(i.address + `, Toronto, Canada`);

            mapMarkers.push(newMapMarker);
        }

        
    }
});

function initMap(){
    let geocoder : object = new google.maps.Geocoder();
   map = new google.maps.Map(
     document.getElementById("map"),
     {
         center: Toronto,
         zoom: 8
     }
   );

//    addMarker(Toronto);
//    getLatLng("1 Yonge Street Toronto, Ontario, Canada");

   for(let cl of addresses) {
        let latlng : LatLng = { lat: cl.lat, lng: cl.lon};
        let newMapMarker : MapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
   }

   //let markersIndex: number = 0;
    for(let i = 0; i < 10; i++) {
        
        // setTimeout(() => {}, 1000);
        setLatitudeLongitude(i);
        // console.log(mapMarkers[i].Coordinates)
        addMarker(mapMarkers[1].Coordinates);
    }
    
    function setLatitudeLongitude(markersIndex : number) : void {
        //assigns lat and long for each map marker
        mapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);  
    //    setTimeout(() => {console.log(mapMarkers[markersIndex])}, 1000);
    console.log(mapMarkers[markersIndex].Coordinates)
    }

   function getLatLng(address : string) : LatLng {
        
        geocoder.geocode(
            {address: address},
            function(results, status) {
                //console.log(status)
                if(status === 'OK') {
                    console.log('Latitude : ' + results[0].geometry.location.lat());
                    console.log('Longitude : ' + results[0].geometry.location.lng());
                    var coord = {
                        lat: results[0].geometry.location.lat(), 
                        lng: results[0].geometry.location.lng() 
                    };
                    // console.log(coord);
                    return coord;
                    
                } else {
                    console.log('In else');
                    setInterval( getLatLng(address), 2000);
                    
                }
            }
        );

   }

   function addMarker(coord : LatLng) : void {
        //will place mapmarker based on coordinates
        
        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: `A cool place to be`
        });
   }
}
