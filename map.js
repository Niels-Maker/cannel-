document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('map').setView([44.8378, -0.5792], 13);

  // Fond de carte
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap – France',
    minZoom: 2,
    maxZoom: 18
  }).addTo(map);

  // Liste des cannelés spots
  const lieux = [
    {
      nom: "Baillardran",
      desc: "L’institution. Présente dans toute la ville, cette enseigne offre une cuisson impeccable et une pâte onctueuse.",
      lat: 44.8365,
      lng: -0.5798
    },
    {
      nom: "La Toque Cuivrée",
      desc: "Réputée pour son excellent rapport qualité-prix et des cannelés croustillants à souhait.",
      lat: 44.8389,
      lng: -0.5725
    },
    {
      nom: "Maison Lemoine",
      desc: "Artisanale et raffinée, cette maison familiale propose des cannelés de grande qualité.",
      lat: 44.8403,
      lng: -0.5806
    },
    {
      nom: "Michel's Bakery",
      desc: "Pour une version moderne du cannelé, revisitée avec des saveurs originales comme caramel au beurre salé ou citron yuzu.",
      lat: 44.8332,
      lng: -0.5731
    },
    {
      nom: "Marché des Capucins",
      desc: "De nombreux producteurs y proposent des cannelés faits maison, souvent encore tièdes !",
      lat: 44.8299,
      lng: -0.5663
    }
  ];

  // Ajouter les marqueurs
  lieux.forEach(lieu => {
    L.marker([lieu.lat, lieu.lng])
      .addTo(map)
      .bindPopup(`<strong>${lieu.nom}</strong><br>${lieu.desc}`);
  });
});
