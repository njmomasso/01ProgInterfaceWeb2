export class BoiteModale {
    #conteneurHTML; // Où la modale sera injectée
    #donnees = null; // Données du livre à afficher
    element = null;  // Référence à l'élément HTML de la modale

    constructor(conteneurHTML) {
        this.#conteneurHTML = conteneurHTML;
        this.generer();
    }

    // Crée la structure HTML de la modale
    generer() {
        const gabarit = `
            <div class="boite-modale" style="display:none;">
                <div class="boite-modale__fond"></div>
                <div class="boite-modale__contenu">
                    <button class="boite-modale__fermer">X</button>
                    <div class="boite-modale__texte"></div>
                </div>
            </div>
        `;
        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.element = this.#conteneurHTML.lastElementChild;

        // Listener pour fermer la modale
        const btnFermer = this.element.querySelector(".boite-modale__fermer");
        btnFermer.addEventListener("click", () => this.cacher());
        this.element.querySelector(".boite-modale__fond").addEventListener("click", () => this.cacher());
    }

    // Affiche la modale avec les données passées
    afficher(donnees) {
        this.#donnees = donnees;
        const contenu = this.element.querySelector(".boite-modale__texte");
        contenu.innerHTML = `
            <h2>${donnees.titre}</h2>
            <p>Auteur : ${donnees.auteur}</p>
            <p>Prix : ${donnees.prix} $</p>
            <p>Catégorie : ${donnees.categorie}</p>
            <p>${donnees.description}</p>
        `;
        this.element.style.display = "block";
    }

    // Cache la modale
    cacher() {
        this.element.style.display = "none";
    }
}
