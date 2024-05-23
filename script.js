async function populate(){

    const requestURL = "https://matt-0206.github.io/Titanic/Json/titanic.json"; // gli viene assegnato un link 

    const request = new Request(requestURL) // crea un nuovo oggetto

    const response = await fetch(request); // 
    
    const titanicPass = await response.json(); //

    populateCards(titanicPass);

}

function populateCards(obj){

const container = document.getElementById('card');

const passeggeri = obj.passeggeri;

for(const passeggero of passeggeri){

    const mypara1 = document.createElement('p');
    mypara1.textContent = passeggero.Name;

    container.appendChild(mypara1);

}   

}

populate();