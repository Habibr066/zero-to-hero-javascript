const tinderUser = {}

tinderUser.id = 'userid2233'
tinderUser.name = 'Hassan Sarddar'
tinderUser.isLoggin = false

//console.log(tinderUser)
const regularUser = {
    email: "habibr066@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Habib",
            lastName: "Rashidi"
        }
    }
}
//console.log(regularUser)

// now accesing through the "Dot Notation" the object elements

/*console.log(regularUser.fullName)
console.log("------------------------")

console.log(regularUser.lastName)
*/

const obj1 = {1:"a", 2:"b", 3:"c" }
const obj2 = {4:"x", 5:"y", 6:"y" }

const obj3 = Object.assign(obj1,obj2)

console.log(obj3)