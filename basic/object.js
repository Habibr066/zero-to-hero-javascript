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

console.log(regularUser.fullName)