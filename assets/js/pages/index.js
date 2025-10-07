import { Livre } from "../classes/Livre.js";
import { livres } from "../data/livres.js";
import { Filtre } from "../classes/Filtre.js";
import { BoiteModale } from "../classes/BoiteModale.js";

const grilleHTML = document.querySelector("[data-conteneur-livres]");
const conteneurFiltres = document.querySelector("[data-conteneur-filtres]");

// Instanciation des classes
const modal = new BoiteModale(document.body);
const livreObjet = livres.map(obj => new Livre(obj));

// Fonction qui affiche une liste de livres
function afficherListe(livreTableau) {
    grilleHTML.innerHTML = ""; // on efface le contenu avant d'afficher

    livreTableau.forEach(livre => {
        grilleHTML.insertAdjacentHTML("beforeend", livre.genererGabaritTuile());
        const tuile = grilleHTML.lastElementChild;

        // Ouvrir la modale au clic
        tuile.addEventListener("click", () => {
            console.log("Ouvrir modal pour :", livre.getCompleteData());
            modal.afficher(livre.getCompleteData());
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
    const bouton = new Filtre(conteneurFiltres, label, label);

    bouton.element.addEventListener("click", () => {
        document.querySelectorAll(".filtre").forEach(btn => btn.classList.remove("filtre--actif"));
        bouton.toggle();
        appliquerFiltre(bouton.getValeur());
    });
});

// Applique le filtre choisi
function appliquerFiltre(valeur) {
    let livresFiltres;

    if (valeur === "Tous") {
        livresFiltres = livreObjet;
    } else if (valeur === "Nouveautés") {
        livresFiltres = livreObjet.filter(livre => livre.isNouveaute());
    } else {
        livresFiltres = livreObjet.filter(livre => livre.getCategorie() === valeur);
    }

    afficherListe(livresFiltres);
}

// Affichage initial
afficherListe(livreObjet);
