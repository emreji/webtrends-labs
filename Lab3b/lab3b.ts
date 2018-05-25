let map: any;
let addresses : any[];
let mapMarkers : MapMarker[] = []; // defining an array of MapMarker object & initializing it

// interface
interface LatLng {
    lat: number,
    lng: number
}

class MapMarker{
    Address: string;
    LatLng: LatLng;

    public constructor(address: string){
      this.Address = address;
    };
}

let Toronto : LatLng = { lat: 43, lng: -79.38 };

$.ajax({
    type: 'POST',
    url: 'AClocations.json',
    dataType: 'json',
    success: function(data) {

        console.log(data)
        // for(let i of data){
        //     console.log(i.address);
        // }

        addresses =  data;
        for(let i of addresses){
            console.log(i.address);

            // add map marker to array of map markers
            let newMapMarker : MapMarker = new MapMarker(i.address); // using address constructor here

            mapMarkers.push(newMapMarker);
        }

        console.log(mapMarkers);
    }

});

function initMap(){
   map = new google.maps.Map(
     document.getElementById("map"),
     {
         center: Toronto,
         zoom: 8
     }
   );
}

initMap();