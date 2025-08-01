const map = L.map('map').setView([22.9734, 78.6569], 5);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by stacksquad with ♥';

L.tileLayer(tileUrl, { attribution }).addTo(map);

map.setMaxBounds([
  [6.55, 68.11],  
  [35.67, 97.395] 
]);

const icon1 = L.icon({
  iconUrl: '../Pictures/mapimages/warli-icon.png',
  iconSize: [52, 52]
})
const icon2 = L.icon({
  iconUrl: '../Pictures/mapimages/kalighat.png',
  iconSize: [52, 52]
})
const icon3 = L.icon({
  iconUrl: '../Pictures/mapimages/kalamk.png',
  iconSize: [120, 120]
})
const icon4 = L.icon({
  iconUrl: '../Pictures/mapimages/madhubani-br.png',
  iconSize: [92, 92]
})
const icon5 = L.icon({
  iconUrl: '../Pictures/mapimages/pattachitra.png',
  iconSize: [92, 92]
})
const icon6 = L.icon({
  iconUrl: '../Pictures/mapimages/tanjore.png',
  iconSize: [92, 92]
})
const icon7 = L.icon({
  iconUrl: '../Pictures/mapimages/chitrakathi.png',
  iconSize: [92, 92]
})
const icon8 = L.icon({
  iconUrl: '../Pictures/mapimages/gondpain.png',
  iconSize: [102, 132]
})
const icon9 = L.icon({
  iconUrl: '../Pictures/mapimages/dollguj.png',
  iconSize: [72, 92]
})
const icon10 = L.icon({
  iconUrl: '../Pictures/mapimages/phadraj.png',
  iconSize: [72, 92]
})
const icon11 = L.icon({
  iconUrl: '../Pictures/mapimages/sanjhiup.png',
  iconSize: [62, 62]
})
const icon12 = L.icon({
  iconUrl: '../Pictures/mapimages/punjab.png',
  iconSize: [72, 82]
})
const icon13 = L.icon({
  iconUrl: '../Pictures/mapimages/kashmirarts.png',
  iconSize: [62, 72]
})
const icon14 = L.icon({
  iconUrl: '../Pictures/mapimages/assamtoys.png',
  iconSize: [62, 72]
})
const icon15 = L.icon({
  iconUrl: '../Pictures/mapimages/manipur.png',
  iconSize: [62, 72]
})
const icon16 = L.icon({
  iconUrl: '../Pictures/mapimages/arunap.png',
  iconSize: [62, 72]
})

// Define icons (icon mapping by name for dynamic selection)
const iconMap = {
  "Kalamkari art": L.icon({ iconUrl: '../pictures/mapimages/kalamk.png', iconSize: [120, 120] }),
  "Bamboo & cane Toys": L.icon({ iconUrl: '../pictures/mapimages/arunap.png', iconSize: [62, 72] }),
  "wooden toys & bamboo houses": L.icon({ iconUrl: '../pictures/mapimages/assamtoys.png', iconSize: [62, 72] }),
  "Madhubani Arts": L.icon({ iconUrl: '../pictures/mapimages/madhubani-br.png', iconSize: [92, 92] }),
  "dholl": L.icon({ iconUrl: '../pictures/mapimages/dollguj.png', iconSize: [72, 92] }),
  "Kashmiri Arts": L.icon({ iconUrl: '../pictures/mapimages/kashmirarts.png', iconSize: [62, 72] }),
  "Yakshagana": L.icon({ iconUrl: '../pictures/mapimages/chitrakathi.png', iconSize: [152, 92] }),
  "Gond Paint": L.icon({ iconUrl: '../Pictures/mapimages/gondpain.png', iconSize: [102, 132] }),
  "Warli Art": L.icon({ iconUrl: '../pictures/mapimages/warli-icon.png', iconSize: [52, 52] }),
  "manipuri folk dance": L.icon({ iconUrl: '../pictures/mapimages/manipur.png', iconSize: [62, 72] }),
  "Patachitra art": L.icon({ iconUrl: '../pictures/mapimages/pattachitra.png', iconSize: [92, 92] }),
  "Punjabi Bhangra": L.icon({ iconUrl: '../pictures/mapimages/punjab.png', iconSize: [72, 82] }),
  "Ghoomer": L.icon({ iconUrl: '../pictures/mapimages/phadraj.png', iconSize: [72, 92] }),
  "Tanjhore": L.icon({ iconUrl: '../pictures/mapimages/tanjore.png', iconSize: [92, 92] }),
  "Sanjhi": L.icon({ iconUrl: '../pictures/mapimages/sanjhiup.png', iconSize: [62, 62] }),
  "Kalighat": L.icon({ iconUrl: '../pictures/mapimages/kalighat.png', iconSize: [52, 52] }),
};


// Bind popups and assign icons dynamically
function onEachFeature(feature, layer) {
  const props = feature.properties;
  const popupContent = `
    <strong>${props.name}</strong><br>
    <em>Origin:</em> ${props.origin}<br>
    <em>Technique:</em> ${props.Technique}<br>
    <em>Famous Artist(s):</em> ${props.FamousArtist}
  `;
  layer.bindPopup(popupContent);
}

// Assign icon per feature
function pointToLayer(feature, latlng) {
  const icon = iconMap[feature.properties.name] || L.icon({
    iconUrl: '../pictures/mapimages/default.png',  // fallback icon
    iconSize: [50, 50]
  });

  return L.marker(latlng, { icon });
}

// Create geoJSON layer
const shopsLayer = L.geoJSON(culturelist, {
  onEachFeature,
  pointToLayer
});

shopsLayer.addTo(map);

// Generate culture list on the sidebar
function generateList() {
  const ul = document.querySelector('.list');
  culturelist.forEach((state) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const a = document.createElement('a');
    const pOrigin = document.createElement('p');
    const pTechnique = document.createElement('p');
    a.addEventListener('click',() => {
      flyToStore(state);
    });
    div.classList.add('cultures-list');
    a.innerText = state.properties.name;
    a.href = '#';
    pOrigin.innerText = "Origin: " + state.properties.origin;
    pTechnique.innerText = "Technique: " + state.properties.Technique;

    div.appendChild(a);
    div.appendChild(pOrigin);
    div.appendChild(pTechnique);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList();

function flyToStore(store) {
  const lat = store.geometry.coordinates[1];
  const lng = store.geometry.coordinates[0];
  map.flyTo([lat,lng], 9, {
    duration: 2
  });
  L.popup({closeButton:false, offset: L.point(0,-8)})
  .setLatLng([lat,lng])
  .setContent(`
  <strong>${store.properties.name}</strong><br>
  <em>Origin:</em> ${store.properties.origin}<br>
  <em>Technique:</em> ${store.properties.Technique}<br>
  <em>Famous Artist(s):</em> ${store.properties.FamousArtist}
`)
  .openOn(map);
}


