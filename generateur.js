document.getElementById("canneleForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const taille = document.getElementById("taille").value;
  const gout = document.getElementById("gout").value;
  const cuisson = document.getElementById("cuisson").value;
  const vegan = document.getElementById("vegan").checked;

  const nom = `${taille} cannelé ${gout}${vegan ? " vegan" : ""}`;
  const description = `Un cannelé ${taille}, au délicieux goût de ${gout}, avec une cuisson ${cuisson}. ${vegan ? "Sans aucun produit animal. 🌿" : "Traditionnel, pour les puristes. 😋"}`;

  const illustration = {
    mini: "🟤",
    moyen: "🟫",
    maxi: "🟥"
  };

  document.getElementById("ficheResultat").style.display = "block";
  document.getElementById("illustration").textContent = illustration[taille] || "🟤";
  document.getElementById("description").innerHTML = `<strong>${nom}</strong><br>${description}`;
});

