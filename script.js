async function populate(){

    const requestURL = "https://matt-0206.github.io/Titanic/titanic.json"; // gli viene assegnato un link 

    const request = new Request(requestURL) // crea un nuovo oggetto

    const response = await fetch(request); // 
    
    const titanicPass = await response.json(); //

    populateCards(titanicPass);

}

function populateCards(obj){

const container = document.getElementById('cards');

const passeggeri = obj.passengers;

for(const passeggero of passeggeri){

    const card = document.createElement('div');

    const mypara1 = document.createElement('h3');
    mypara1.textContent = `Name: ${passeggero.Name}`;

    const mypara2 = document.createElement('p');
    mypara2.textContent = `Sex: ${passeggero.Sex}`;

    const mypara3 = document.createElement('p');
    mypara3.textContent = `Age: ${passeggero.Age}`;

    const mypara4 = document.createElement('p');
    mypara4.textContent = `Embarked: ${passeggero.Embarked}`;

    const mypara5 = document.createElement('p');
    mypara5.textContent = `Class: ${passeggero.Pclass}`;

    const mypara6 = document.createElement('p');
    mypara6.textContent = `Survived: ${passeggero.Survived}`;

    container.appendChild(card);

    card.appendChild(mypara1);
    card.appendChild(mypara2);
    card.appendChild(mypara3);
    card.appendChild(mypara4);
    card.appendChild(mypara5);
    card.appendChild(mypara6);

}   

}

populate();