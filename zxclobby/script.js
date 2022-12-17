let find = document.querySelector('.find');
find.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        coords = position.coords;
        console.log(coords);
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([longitude, latitude]),
                zoom: 18
            })
        })
    });
});