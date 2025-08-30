const person1 = {
    name: 'João',
    middle_name: 'Eliésio',
    surname: "D'Mata",
    age: 45,

    speak() {
        console.log(
            `Meu nome é ${this.name}`
        )
    },

    ageIncrement () {
        this.age++
        console.log(this.age)
    }

};


function personCreate (name, middle_name, surname, age=24) {
    return {
        name,
        middle_name,
        surname,
        age,

        speak () {
            console.log(
                `Meu nome é ${this.name} e eu tenho ${this.age}`
            )
        },

        ageIncrement () {
            this.age++
            return this.age
        }
    }
};

person2 = personCreate('Leo', 'Nascimento', 'Rocha', age=34)

person2.speak()
console.log(person2.age)
person2.ageIncrement()
console.log(person2.ageIncrement())