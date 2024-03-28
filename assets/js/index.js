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
        [{ lat: -21.781266359055095, lng: -48.17669568546269 }, "Araraquara-SP Garra de Águia"],
        [{ lat: -21.784388211355598, lng: -48.18026546766289 }, "Meu Endereço Aza teste 2"]
    ];
    
    
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const infoWindow = new google.maps.InfoWindow();

    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat: -21.781266359055095, lng: -48.17669568546269},
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
}

initMap();

// foco ao escolher endereço no mapa

function moveMapAndScroll(lat, lng) {
    // Move o mapa para as coordenadas específicas
    map.panTo({lat: lat, lng: lng});
    
    // Aguarde o mapa mover para então deslocar a visualização da página até o mapa
    // Isso é útil se o movimento do mapa for animado e levar algum tempo
    setTimeout(() => {
        const mapElement = document.getElementById('encontrar-academia'); // Substitua 'mapaLocal' pelo ID real do seu elemento de mapa
        if (mapElement) {
            mapElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300); // Ajuste o tempo de espera conforme necessário
}

