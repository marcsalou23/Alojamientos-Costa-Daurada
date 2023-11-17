# Mapa de la Costa Daurada

Este repositorio alberga una aplicación web que presenta un mapa interactivo de la pintoresca región de la Costa Daurada en España. La aplicación incluye marcadores para hoteles y campings, así como una útil función de búsqueda para encontrar ubicaciones específicas con facilidad.

Visita el sitio [aquí](alojamientos-costa-daurada.vercel.app).

![Demostración de la aplicación](https://s5.gifyu.com/images/SRNyR.gif)

## Tecnologías Utilizadas

La aplicación está construida con las siguientes tecnologías:

- **Leaflet:** Una biblioteca JavaScript para crear mapas interactivos.
- **Omnivore:** Un plugin para Leaflet que permite cargar datos de una variedad de formatos, incluyendo GeoJSON, CSV y KML.
- **Leaflet-MiniMap:** Un plugin que añade un minimapa al mapa principal.
- **Leaflet.PolylineMeasure:** Un plugin que permite medir la distancia de líneas y polilíneas en el mapa.
- **Leaflet-Search:** Un plugin que facilita la búsqueda de ubicaciones en el mapa.

## Datos

Los datos del mapa se almacenan en dos archivos JSON:

- `datos/parques.js:` Contiene información sobre los parques en la región de la Costa Daurada.
- `datos/campings.js:` Contiene información sobre los campings en la región de la Costa Daurada.

## Uso

Para ejecutar la aplicación, necesitarás tener un servidor web instalado en tu ordenador. Una vez instalado, simplemente clona este repositorio y abre el archivo `index.html` en tu navegador web preferido.

## Contribuciones

¡Si deseas contribuir a este proyecto, no dudes en bifurcar el repositorio y enviar solicitudes de extracción! Tu ayuda es apreciada para mejorar y hacer crecer esta aplicación de mapa de la Costa Daurada.
