require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {
    
    esriConfig.apiKey = "AAPK72dc730c2917464995e9e10371db321aC2zo3yfnMZOCkiVW12V-auIzcHUgITJkFEN4Pd5eIWb0xvbxKBg5YaqPSA351CGk";

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });

  });