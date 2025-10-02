import { Livre } from "../classes/Livre.js";
import { livres } from "../data/livres.js";


const grilleHTML = document.querySelector("[data-conteneur-livres]");
// const conteneurFiltres = document.querySelector("[data-conteneur-filtres]");

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

afficherListe(livreObjet);
