//Definimos la variable map que alojará nuestro mapa
var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([1.095315, 41.077600], 'EPSG:4326', 'EPSG:3857'),
    zoom: 14,
//    extent: [304755, 5147647, 323864, 5166756] fijar la vista del mapa
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ]
});