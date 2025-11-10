import * as L from './node_modules/leaflet/dist/leaflet-src.js';
import {Map,TileLayer} from 'https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js';

console.log(Map);

var map = new Map('map');
map.setView([51.505, -0.09], 13);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);