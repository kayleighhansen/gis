require([
        "esri/config",
        "esri/Map", 
        "esri/views/MapView",
        "esri/widgets/Locate",
        "esri/widgets/Track",
        "esri/Graphic"
    ], 
    
    function (esriConfig, Map, MapView, Track, Graphic) {
    
        esriConfig.apiKey = "AAPK72dc730c2917464995e9e10371db321aC2zo3yfnMZOCkiVW12V-auIzcHUgITJkFEN4Pd5eIWb0xvbxKBg5YaqPSA351CGk";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
        });

        const view = new MapView({
            container: "viewDiv", // Div element
            map: map,
            center: [-40, 28],
            zoom: 2
        });

        const track = new Track({
            view: view,
            graphic: new Graphic({
              symbol: {
                type: "simple-marker",
                size: "12px",
                color: "green",
                outline: {
                  color: "red",
                  width: "30px"
                }
              }
            }),
            useHeadingEnabled: false
          });
          
        view.ui.add(track, "top-left");
  });