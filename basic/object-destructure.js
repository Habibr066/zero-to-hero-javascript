// objects de-structure through the JSON and API 

const course ={
    courseName: 'fundamentals of javascript',
    duration:'3 months',
    instructor:{
        name:"saqib khan",
        email:"saqib@gmail.com"
        },
        price: '3890',
        }

        const {instructor: inst} = course