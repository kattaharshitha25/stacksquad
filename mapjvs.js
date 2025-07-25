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
  iconSize: [52, 52]
})
const icon2 = L.icon({
  iconUrl: 'mapimages/kalighat.png',
  iconSize: [52, 52]
})
const icon3 = L.icon({
  iconUrl: 'mapimages/kalamk.png',
  iconSize: [120, 120]
})
const icon4 = L.icon({
  iconUrl: 'mapimages/madhubani-br.png',
  iconSize: [92, 92]
})
const icon5 = L.icon({
  iconUrl: 'mapimages/pattachitra.png',
  iconSize: [92, 92]
})
const icon6 = L.icon({
  iconUrl: 'mapimages/tanjore.png',
  iconSize: [92, 92]
})
const icon7 = L.icon({
  iconUrl: 'mapimages/chitrakathi.png',
  iconSize: [92, 92]
})
const icon8 = L.icon({
  iconUrl: 'mapimages/gondpain.png',
  iconSize: [102, 132]
})
const icon9 = L.icon({
  iconUrl: 'mapimages/dollguj.png',
  iconSize: [72, 92]
})
const icon10 = L.icon({
  iconUrl: 'mapimages/phadraj.png',
  iconSize: [72, 92]
})
const icon11 = L.icon({
  iconUrl: 'mapimages/sanjhiup.png',
  iconSize: [62, 62]
})
const icon12 = L.icon({
  iconUrl: 'mapimages/punjab.png',
  iconSize: [72, 82]
})
const icon13 = L.icon({
  iconUrl: 'mapimages/kashmirarts.png',
  iconSize: [62, 72]
})
const icon14 = L.icon({
  iconUrl: 'mapimages/assamtoys.png',
  iconSize: [62, 72]
})
const icon15 = L.icon({
  iconUrl: 'mapimages/manipur.png',
  iconSize: [62, 72]
})
const icon16 = L.icon({
  iconUrl: 'mapimages/arunap.png',
  iconSize: [62, 72]
})


const marker1 = L.marker([15.9129, 79.73999],{
  icon: icon3
});
const marker2 = L.marker([28.2180, 94.7278], {
  icon: icon16
});
const marker3 = L.marker([26.2006, 89.9376], {
  icon: icon14
});
const marker4 = L.marker([26.0961, 85.3131],{
  icon: icon4
});
const marker7 = L.marker([22.2587, 71.1924], {
  icon: icon9
});
const marker9 = L.marker([34.6048, 76.1734], {
  icon: icon13
});
const marker11 = L.marker([15.3173, 75.7139], {
  icon: icon7
});
const marker13 = L.marker([22.9734, 78.6569], {
  icon: icon8
});
const marker14 = L.marker([19.7515, 75.7139], {
  icon: icon1
});
const marker15 = L.marker([24.6637, 93.9063], {
  icon: icon15
});
const marker19 = L.marker([20.0451, 83.0985], {
  icon: icon5
});
const marker20 = L.marker([30.9471, 76.3412], {
  icon: icon12
});
const marker21 = L.marker([27.0238, 74.2179], {
  icon: icon10
});
const marker23 = L.marker([11.1271, 78.6569],{
  icon: icon6
});
const marker26 = L.marker([27.8467, 80.9462], {
  icon: icon11
});
const marker28 = L.marker([22.9868, 87.8550], {
  icon: icon2
});

marker1.addTo(map);
marker2.addTo(map);
marker3.addTo(map);
marker4.addTo(map);
marker7.addTo(map);
marker9.addTo(map);
marker11.addTo(map);
marker13.addTo(map);
marker14.addTo(map);
marker15.addTo(map);
marker19.addTo(map);
marker20.addTo(map);
marker21.addTo(map);
marker23.addTo(map);
marker26.addTo(map);
marker28.addTo(map);

