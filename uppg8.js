

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


    const persons = [
        { name: "Emil", age: 25 },
        { name: "John", age: 35 },
        { name: "Doe", age: 40 },
        { name: "Jane", age: 28 },
        { name: "Smith", age: 32 }
    ];

    function printNamesOver30(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].age > 30) {
                console.log(arr[i].name);
            }
        }
    }

    printNamesOver30(persons);

}

uppg8();

module.exports = { uppg8 };