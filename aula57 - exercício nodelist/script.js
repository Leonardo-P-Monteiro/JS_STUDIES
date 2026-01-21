const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p');

const bodystyle = getComputedStyle(document.body);
const backgroundColorBody = bodystyle.backgroundColor;
console.log(backgroundColorBody);



for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}