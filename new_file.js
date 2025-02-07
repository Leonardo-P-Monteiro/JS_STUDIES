/* It will be displayed on the console of browser */
console.log("Hi! I'm stay here!")

// Giving data for the elements
document.getElementById('title1').innerHTML = 'THIS IS MY FIRST TITLE WITH JS'
document.getElementById('p1').innerHTML = 'We are practicing our js knowledgment.'

// Other things 

const car = {
    name: 'fusca',
    year: '1990',
    label:'Wolks'
}

let info = '';

for (let i in car) {
    info += car[i] + ' ';
};

// Showing loop for.
document.getElementById("p2").innerHTML = info;
