const map = L.map('map').setView([51.505, -0.09], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by stacksquad with ♥';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

map.setMaxBounds([
  [6.55, 68.11],  
  [35.67, 97.395] 
]);

const icon1 = L.icon({
  iconUrl: 'mapimages/warli-icon.png',
  iconSize: [32, 32]
})

const marker1 = L.marker([15.9129, 79.73999], {
  icon: icon1
});
const marker2 = L.marker([28.2180, 94.7278]);
const marker3 = L.marker([26.2006, 92.9376]);
const marker4 = L.marker([25.0961, 85.3131]);
const marker5 = L.marker([21.2787, 81.8661]);
const marker6 = L.marker([15.2993, 74.1240]);
const marker7 = L.marker([22.2587, 71.1924]);
const marker8 = L.marker([29.0588, 76.0856]);
const marker9 = L.marker([31.1048, 77.1734]);
const marker10 = L.marker([23.6102, 85.2799]);
const marker11 = L.marker([15.3173, 75.7139]);
const marker12 = L.marker([10.8505, 76.2711]);
const marker13 = L.marker([22.9734, 78.6569]);
const marker14 = L.marker([19.7515, 75.7139]);
const marker15 = L.marker([24.6637, 93.9063]);
const marker16 = L.marker([25.4670, 91.3662]);
const marker17 = L.marker([23.1645, 92.9376]);
const marker18 = L.marker([26.1584, 94.5624]);
const marker19 = L.marker([20.9517, 85.0985]);
const marker20 = L.marker([31.1471, 75.3412]);
const marker21 = L.marker([27.0238, 74.2179]);
const marker22 = L.marker([27.5330, 88.5122]);
const marker23 = L.marker([11.1271, 78.6569]);
const marker24 = L.marker([18.1124, 79.0193]);
const marker25 = L.marker([23.9408, 91.9882]);
const marker26 = L.marker([26.8467, 80.9462]);
const marker27 = L.marker([30.0668, 79.0193]);
const marker28 = L.marker([22.9868, 87.8550]);

marker1.addTo(map);
marker2.addTo(map);
marker3.addTo(map);
marker4.addTo(map);
marker5.addTo(map);
marker6.addTo(map);
marker7.addTo(map);
marker8.addTo(map);
marker9.addTo(map);
marker10.addTo(map);
marker11.addTo(map);
marker12.addTo(map);
marker13.addTo(map);
marker14.addTo(map);
marker15.addTo(map);
marker16.addTo(map);
marker17.addTo(map);
marker18.addTo(map);
marker19.addTo(map);
marker20.addTo(map);
marker21.addTo(map);
marker22.addTo(map);
marker23.addTo(map);
marker24.addTo(map);
marker25.addTo(map);
marker26.addTo(map);
marker27.addTo(map);
marker28.addTo(map);

