
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


//////////////////////////////////////////

function exampleFunction(param1, param2) {
    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);
    return param1 + param2;
  }
  
  let result = exampleFunction(5, 7);
  console.log("Result:", result);



  function modifyObject(obj) {
    obj.value = 10; // Modifies the original object
    obj = { value: 20 }; // Reassigns the parameter, doesn't affect the original
  }
  
  let myObject = { value: 5 };
  modifyObject(myObject);
  console.log(myObject.value); // Output: 10