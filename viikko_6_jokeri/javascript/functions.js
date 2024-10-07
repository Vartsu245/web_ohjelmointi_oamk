'use strict'

const lista = document.querySelector('table');
const button =document.querySelector('button')
let rivit = []
let kaikki = 0

const getRandomIntNumberInRange = () => {
    return Math.floor(Math.random()* 9) + 0;
}

const addRow = () => {
    rivit =[];
    const row = lista.insertRow();
    
    for (let index = 0; index < 7; index++) {
        const luku = getRandomIntNumberInRange();
        rivit.push(luku);
        const col = row.insertCell(index)
        col.innerHTML = '<h4 id="jokeriluku">' +luku +'</h4>';
    }

    kaikki = kaikki +1;

    document.querySelector('#kk').innerHTML="Valmiita rivejä "+kaikki;

}


button.addEventListener ('click', addRow)

