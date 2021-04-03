var Stamen_Watercolor = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors'
});

var map = L.map('Map', {
    center: [46.7985124, 8.2317827],
    zoom: 7,
    layers: [Stamen_Watercolor]
});

var wms = L.tileLayer.wms('https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities', {
    layers: 'ch.swisstopo.geologie-dosisleistung-terrestrisch',
    transparent: true,
    format: 'image/png'
}).addTo(map);