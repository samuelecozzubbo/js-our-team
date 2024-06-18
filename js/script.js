// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const members = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg",
    },
    {
        "name": "Angela",
        "role": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg",
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "walter-gordon-office-manager.jpg",
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "angela-caroll-chief-editor.jpg",
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "scott-estrada-developer.jpg",
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg",
    },
];
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i= 0; i < members.length; i++){
    let worker = members[i];
    console.log("Worker" + i);
    for(let key in worker){
        console.log( key + ":" + worker[key]);
    }
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
