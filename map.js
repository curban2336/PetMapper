import * as L from './node_modules/leaflet/dist/leaflet-src.js';
import {Map,TileLayer} from 'https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js';

// var map = new Map('map');
// var markerList = [];
// map.setView([51.505, -0.09], 13);
// var latitude = 51.505;
// var longitude = -0.09;
// const markerEvent = new CustomEvent('custom:AddMarker', {
//     detail: {
//         lat: latitude,
//         lng: longitude
//     }
// });

// new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// const AddMarker = (lat, lng) => {
//     var marker = L.marker([lat, lng]).addTo(map);
//     markerList.push(marker);
//     console.log(markerList);
// }

//const M = document.getElementById('map-script');

// addEventListener('custom:AddMarker', e => {
//     AddMarker(e.detail.lat, e.detail.lng);
// });

// exports.AddMarker = AddMarker;
// exports.markerList = markerList;
// exports.map = map;