
console.log('Testing') ;

const phan = "Flex";
const globe = "Globe";
const uppes= "Upper"


const da= {
    name: "Dauphin",
    age: 32,
    married: true,

    sayName: function() {
        console.log(this);
    }
 
};


console.log(da.married)
console.log(da.age)
console.log(da.name)

da.sayName();



function logger() {
    const phan = "Flex"
    console.log("Flex");
    console.log("Flex");
}

console.log(phan);



function logger() {
    console.log(globe);
    console.log("Globe");
    console.log("Globe");
}

console.log(globe);


function toUpper(text) {
   const upperCased = text.toUpperCase();
   console.log(upperCased);
}

toUpper(uppes);

function adder(num1, num2) {
    console.log(num1+num2);

}

adder(8,10);








