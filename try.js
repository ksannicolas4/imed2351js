
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
    obj.value = 10;
    obj = { value: 20 }; 
  }
  
  let exObject = { value: 5 };
  modifyObject(exObject);
  console.log(exObject.value); // Output: 10



  
//////////////////////////////////////////array////////////////////////////////

const todo = ["Work", "Gym", "School", "Homework"];

console.log (todo[3]);

todo.push ('Added');
console.log (todo);
console.log (todo.indexOf("Homework"));


////////////////////////////////////////////////loop//////////
const fruit = ["Grapes", "Apples", "Tomatoes", "Oranges"];
for (names of fruit) {
    console.log (fruit);
    if(names ==="Grapes")
        console.log ("Grapes are purple")
    console.log(`Juicey Fruit ${fruit}`)
    
}


/////////////////////////while//////////////////////
let loop = 0
while (loop < 100) {
    console.log ('Website is still loading');

loop++; 
}


//////////////////////////////
const text = document.querySelector (".one");
const change = document.querySelector (".change");
text.style.color = "white";
text.style.backgroundColor = "purple";
change.addEventListener("click", function() {
    text.classList.toggle("colorchange");
    

});
