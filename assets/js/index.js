// Initialize and add the map
let map;

// async function initMap(name, lat, lng) {
//   const position = { lat: lat, lng: lng };

//   // Request needed libraries.
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   map = new Map(document.getElementById("map"), {
//     zoom: 15,
//     center: position,
//     mapId: "Sushizinho",
//   });

//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: name,
//   });
// }

// initMap("Ki Sushi", -21.7846475, -48.1797056);


async function initMap() {
    const coords = [
        [{lat: -21.7846475, lng: -48.1797056}, "Local 1"],
        [{lat: -21.7986507, lng: -48.1783277}, "Local 2"],
        [{lat: -21.7887224, lng: -48.1909447}, "Local 3"],
    ];

    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const infoWindow = new google.maps.InfoWindow();

    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat: -21.7846475, lng: -48.1797056},
        mapId: "Mapa",
    });

    // Create the markers.
    coords.forEach(([position, title]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            label: ``,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });

    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Mapa",
    });
}

initMap();