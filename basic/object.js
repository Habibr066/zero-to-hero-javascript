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
const obj2 = {4:"x", 5:"y", 6:"z" }

//const obj3 = Object.assign({},obj1,obj2)

//console.log(obj3)

// Another latest method which is using spread operator (  ...obj1, ...obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)


// now users comes from databases to through the ( arrays => objects to insitilize

const users = [ {},
    {},
    {},
    {}
]

// now accessing through "Objects.key(nameof-objects)"

console.log(Object.keys(tinderUser))
