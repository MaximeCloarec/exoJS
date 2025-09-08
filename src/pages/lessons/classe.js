// class UserProfile {
//     //! Pas besoin de déclarer function devant le constructor et méthodes
//     constructor(paramNameUser, paramMailUser, paramPhoneUser) {
//         // Attribut en IN MODE indispensable pour créer des new UserProfile
//         this.nameUser = paramNameUser;
//         this.mailUser = paramMailUser;
//         this.phoneUser = paramPhoneUser;
//         // Attribut en outMode
//         this.contact = paramPhoneUser + paramMailUser;
//         this.resume = this.getProfileInfo();
//         this.count = 0;
//         // this._nom = nom;
//     }
//     getPhone() {
//         if (user === "connected") return this.phoneUser;
//     }
//     getProfileInfo() {
//         console.log("this ", this);
//         return `infos de l'utilisateur :
//             son nom : ${this.nameUser}
//             son mail : ${this.mailUser}
//             son Tél : ${this.phoneUser}`;
//     }
// }

// const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
// console.log(exampleUser1);
// console.log(exampleUser1.nameUser);
// console.log(exampleUser1.phoneUser);
// const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
// console.log(exampleUser2.nameUser);
// exampleUser2.getProfileInfo();
// const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
// exampleUser3.getProfileInfo();
// console.log("--e-de-de-d", exampleUser1.nameUser);

// // Afficher les infos userProfile dans la page web
// function affichagePageWeb(oneUser) {
//     const h2element = document.querySelector("h2");
//     h2element.innerText = oneUser.getProfileInfo();
// }

// affichagePageWeb(exampleUser1);

// class Livre {
//     constructor(titre, auteur, disponible = true) {
//         this.titre = titre;
//         this.auteur = auteur;
//         this.disponible = disponible;
//     }
//     emprunter() {
//         if (this.disponible == true) {
//             this.disponible = false;
//             return;
//         }
//         console.log("Ce livre ne peut pas être emprunté");
//     }
//     retourner() {
//         this.disponible = true;
//     }
// }

// class Bibliotheque {
//     constructor(nom) {
//         this.nom = nom;
//         this.livres = [];
//     }
//     ajouterLivre(livre) {
//         this.livres.push(livre);
//     }
//     emprunterLivre(titre) {
//         for (const livre of this.livres) {
//             if (livre.titre == titre) {
//                 break;
//             } else {
//                 console.log("Ce livre n'existe pas");
//             }
//         }
//     }
//     retournerLivre(titre) {
//         for (const livre of this.livres) {
//             if (livre.titre == titre) {
//                 break;
//             } else {
//                 console.log("Ce livre n'existe pas dans la bibliothèque");
//             }
//         }
//     }
// }

// // Exemple d'utilisation scénario
// const maBibliotheque = new Bibliotheque("Ma Bibliothèque");
// const livre1 = new Livre("1984", "George Orwell");
// const livre2 = new Livre("Le Gros Petit Prince", "Steven Seagal");
// maBibliotheque.ajouterLivre(livre1);
// maBibliotheque.ajouterLivre(livre2);
// maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
// maBibliotheque.emprunterLivre("1984"); // Déclenche exception livre n'est plus disponible.
// maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
// maBibliotheque.retournerLivre("Bratisla Bios"); // Le Livre n'a jamais existé dans la bibliothèque.
// maBibliotheque.emprunterLivre("198999"); // Déclenche exception livre n'existe pas.
