require([
  // libraries
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer"
 ], function (esriConfig, Map, MapView, FeatureLayer) {

  // API Key, unique to this project
    esriConfig.apiKey = "AAPK69bd30f891284933b1ad15781fd4cd317AlaKktADkB1I5mGRvNXNVoYqgNdapEVG2lP_JTf1nxjKzj0iV4VGPJMgAxnbK4s";
    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer
    });

    const view = new MapView({
      map: map,

      // zoom to the coorinates to Rexburg
      center: [-111.7924, 43.8231],
      zoom: 13,

      // select the div in the html document
      container: "viewDiv",
      constraints: {
        snapToZoom: false
      }
    });

    // add the popups to the points
    const popup = {
      title: "{name}",
      content: "<b>Name: </b>{name}<br><b>Rent: </b>${rent} per month<br><b>Bedrooms: </b>{bdrooms}<br>"
    }

    // add the feature layer 
    const layer = new FeatureLayer({
      url: "https://services3.arcgis.com/okn9Qv5YkVMpW3AU/arcgis/rest/services/rexburg_apartments/FeatureServer/0",
      outFields: ["name", "rent", "bdrooms"],
          popupTemplate: popup
    });

    // append the feature layer to the map
    map.add(layer);

    // SQL statements the query the points on the table
    const sqlExpressions = ["bdrooms >= 1","bdrooms = 1", "bdrooms = 2", "bdrooms = 3", "rent < 1000", "rent > 1000"];

    // create the dropdown bar
    const selectFilter = document.createElement("select");
    selectFilter.setAttribute("class", "esri-widget esri-select");
    selectFilter.setAttribute("style", "width: 275px; font-family: Avenir Next W00; font-size: 1em;");

    // change the options to sql statements
    sqlExpressions.forEach(function(sql){
      let option = document.createElement("option");
      option.value = sql;
      option.innerHTML = sql;
      selectFilter.appendChild(option);
    });

    // add the dropdown bar to the view
    view.ui.add(selectFilter, "top-right");

    function setFeatureLayerFilter(expression) {
      layer.definitionExpression = expression;
    }

    // create the event listener 
    selectFilter.addEventListener('change', function (event) {
      setFeatureLayerFilter(event.target.value);
    });
 });