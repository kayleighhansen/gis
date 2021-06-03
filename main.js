require(
    [
        "esri/config",
        "esri/Map", 
        "esri/views/MapView",
        "esri/widgets/Locate",
    ], 
    
    function (esriConfig, Map, MapView, Locate,) {
    
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

        const locate = new Locate({
            view: view,
            useHeadingEnabled: false,
            goToOverride: function(view, options) {
                options.target.scale = 1500;
                return view.goTo(options.target);
            }
        });
          
        view.ui.add(locate, "top-left");

  });