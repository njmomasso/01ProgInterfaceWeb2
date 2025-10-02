export class Filtre {
    #conteneurHTML; // Conteneur HTML où sera injecté le bouton
    #label;         // Texte affiché sur le bouton
    #valeur;        // Valeur utilisée pour filtrer les livres
    element = null; // Référence au bouton HTML généré

    /**
     * Constructeur
     * @param {HTMLElement} conteneurHTML - Conteneur où le bouton sera ajouté
     * @param {string} label - Texte du bouton
     * @param {string} valeur - Valeur pour filtrer
     */
    constructor(conteneurHTML, label, valeur) {
        this.#conteneurHTML = conteneurHTML;
        this.#label = label;
        this.#valeur = valeur;

        this.generer(); // Crée et injecte le bouton dans le DOM
    }

    // Méthode pour générer le bouton dans le DOM
    generer() {
        const gabarit = `<button class="filtre" data-valeur="${this.#valeur}">${this.#label}</button>`;
        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.element = this.#conteneurHTML.lastElementChild;
    }

    // Méthode pour activer/désactiver visuellement le bouton
    toggle() {
        this.element.classList.toggle("filtre--actif");
    }

    // Récupère la valeur du filtre
    getValeur() {
        return this.#valeur;
    }
}
