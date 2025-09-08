// export async function chuckNorrisWelcome() {
//     try {
//         const data = await fetch("https://api.chucknorris.io/jokes/random");
//         const response = await data.json();
//         return response.value;
//     } catch (error) {
//         console.error("Erreur lors de la récupération de la blague :", error);
//         return "Bienvenue";
//     }
// }



////-------------------------------------------------------------

//recupere l'element du DOM de index.html
const temp = document.getElementById("bienvenue")
//Classique fetch 
export async function chuckNorrisWelcome() {
    try {
        const data = await fetch("https://api.chucknorris.io/jokes/random");
        const response = await data.json();
        temp.innerText=response.value; //modif ici
    } catch (error) {
        console.error("Erreur lors de la récupération de la blague :", error);
        return "Bienvenue";
    }
}