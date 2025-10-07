import { Livre } from "../classes/Livre.js";
import { livres } from "../data/livres.js";
import { Filtre } from "../classes/Filtre.js";

const grilleHTML = document.querySelector("[data-conteneur-livres]");
const conteneurFiltres = document.querySelector("[data-conteneur-filtres]");

const livreObjet = livres.map(obj => new Livre(obj));

// Fonction qui affiche une liste de livres
function afficherListe(livreTableau) {
    grilleHTML.innerHTML = ""; // on efface le contenu avant d'afficher

    livreTableau.forEach(livre => {
        // Ajouter le gabarit HTML de la tuile
        grilleHTML.insertAdjacentHTML("beforeend", livre.genererGabaritTuile());

        // Récupérer le dernier élément ajouté (= la tuile)
        const tuile = grilleHTML.lastElementChild;

        // Ajouter un listener pour ouvrir la boîte modale
        tuile.addEventListener("click", () => {
            console.log("Ouvrir modal pour :", livre.getCompleteData());
            //modal.afficher(livre.getCompleteData()) ......
        });
    });
}

// Tableau des labels des filtres
const labelFiltres = [
    "Tous",
    "Nouveautés",
    "Littérature",
    "Art de vivre",
    "BD, Jeunesse, Humour",
    "Culture et société",
    "Loisirs, Tourisme, Nature",
    "Savoir et science"
];

// Création des boutons de filtre et gestion du clic
labelFiltres.forEach(label => {
    // On utilise directement le label comme valeur
    const bouton = new Filtre(conteneurFiltres, label, label);

    // Gestion du clic
    bouton.element.addEventListener("click", () => {
        // Désactiver visuellement tous les boutons
        document.querySelectorAll(".filtre").forEach(btn => btn.classList.remove("filtre--actif"));

        // Activer le bouton cliqué
        bouton.toggle();

        // Appliquer le filtre correspondant
        appliquerFiltre(bouton.getValeur());
    });
});

/**
 * Applique le filtre choisi et met à jour l'affichage
 * @param {string} valeur - label du filtre cliqué
 */
function appliquerFiltre(valeur) {
    let livresFiltres;

    if (valeur === "Tous") {
        // Afficher tous les livres
        livresFiltres = livreObjet;
    } else if (valeur === "Nouveautés") {
        // Afficher uniquement les nouveautés
        livresFiltres = livreObjet.filter(livre => livre.isNouveaute());
    } else {
        // Afficher les livres dont la catégorie correspond
        livresFiltres = livreObjet.filter(livre => livre.getCategorie() === valeur);
    }

    // Mettre à jour l'affichage
    afficherListe(livresFiltres);
}

// Affichage initial de tous les livres
afficherListe(livreObjet);
