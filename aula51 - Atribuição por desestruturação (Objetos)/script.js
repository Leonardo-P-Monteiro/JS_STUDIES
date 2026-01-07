const person = {
    name: 'John',
    age: 29,
    address: {
        street: 'Avenue P',
        number: '234',
        city: 'Yorkshire',
    },
};

const {
    name: n_person,
    age,
    address: {street},
    address: {number:n},
    address: {city},
    country='No informed',
    } = person

console.log(n_person, 
    street, 
    n, 
    country
)