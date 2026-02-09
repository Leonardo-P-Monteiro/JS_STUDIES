
const myAgeError = (age) => {
    if (age > 18) {
        throw new Error('Age is greater than 18 years.');
    };
    return 'Age is ok - less than 18 years';
};

function myTypeValidationError (x, y) {
    if (typeof x !== 'string' || typeof y !== 'number') {
        throw('Exemple of error without Error constructor function.')
    };

    return console.log(
        `Value of x is: ${x}`,
        `Value of y is: ${y}`,
    );
};

try {
    // myAgeError(21)
    myTypeValidationError(x='Leo', y='LP')
} catch (e) {
    console.log(e)
};