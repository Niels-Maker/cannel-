document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('map').setView([44.8378, -0.5792], 13); // Bordeaux

  // Fond de carte
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap – France',
    minZoom: 2,
    maxZoom: 18
  }).addTo(map);

  // Points personnalisés
  const lieux = [
    {
      nom: "Cannelés Paradis",
      coord: [44.8378, -0.5792],
      description: "Un paradis croustillant pour les amateurs de tradition."
    },
    {
      nom: "Maison du Cannelé",
      coord: [44.8382, -0.5735],
      description: "Un lieu d’exception pour découvrir toutes les variantes."
    },
    {
      nom: "Marché des Capucins",
      coord: [44.8299, -0.5663],
      description: "Marché vivant où l’on trouve des cannelés à tomber !"
    }
  ];

  // Ajouter les marqueurs
  lieux.forEach(lieu => {
    L.marker(lieu.coord)
      .addTo(map)
      .bindPopup(`<strong>${lieu.nom}</strong><br>${lieu.description}`);
  });
});
