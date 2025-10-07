export class Livre {
    // Stockage privé des données de chaque livre
    #data;

    /**
     * Constructeur
     * @param {Object} data - Un objet JSON contenant les infos du livre
     */
    constructor(data) {
        this.#data = data; // Encapsulation des données
    }

    // Retourne l'identifiant unique du livre
    getId() {
        return this.#data.id;
    }

    // Vérifie si le livre est une nouveauté
    isNouveaute() {
        return this.#data.nouveaute === true;
    }

    // Retourne la catégorie du livre
    getCategorie() {
        return this.#data.categorie;
    }

    // Retourne toutes les données du livre
    getCompleteData() {
        return this.#data;
    }

    // Génère le gabarit HTML d’une tuile
    genererGabaritTuile() {
        return `
            <article class="livre" data-id="${this.getId()}">
                <img src="${this.#data.image}" alt="Couverture de ${this.#data.titre}">
                <h3>${this.#data.titre}</h3>
                <p class="prix">${this.#data.prix} $</p>
                <button class="ajout-panier">Ajouter au panier</button>
            </article>
        `;
    }
}
