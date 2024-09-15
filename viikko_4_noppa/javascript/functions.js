const aktivoi = document.getElementById('noppa');
const kuva =document.getElementById('kuva');

const noppa = () => {

let arvo = 0;
do {
    arvo = Math.random()*10
}
while (arvo < 1 || arvo > 6);

arvo = arvo.toFixed(0);

switch (parseInt(arvo)) {
    case 1:
    kuva.src = "./img/yksi.png";
    break;

    case 2:
    kuva.src = "./img/kaksi.png";
    break;

    case 3:
    kuva.src = "./img/kolme.png";
    break;

    case 4:
    kuva.src = "./img/nelja.png";
    break;

    case 5:
    kuva.src = "./img/viisi.png";
    break;

    case 6:
    kuva.src = "./img/kuusi.png";
    break;

    default:
        kuva.src = "./img/kuusi.png";
    break;
}
}   

aktivoi.addEventListener('click', noppa)