function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("b");
    console.log("i");
}
//sayMyName()

//working function that add two numbers
function add(number1,number2){ //parameters
console.log(number1+number2)
};

const result = add(4,4)// arguments
//console.log(result);

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 350, 500))

const user = {
userName: 'habib ur rehman',
price: 6789,
}

function handleUser(anyobject){
console.log('${}')

}


    
handleUser(user)