//singleton

//object literal
// construsctor object.create
const mysum=Symbol('key1')


const user={
    name:'Hitesh',
    [mysum]:"mysum",
    age:18,
    locaton:'Agra',
    email:'email',
    lastlogingday:['Monnday','Saturday']
}
// console.log(user.email );
// console.log(user["email"]);
// console.log(user[mysum]);

// user.email="Ansh@yahoo.com"
// Object.freeze(user)
// console.log(user);


user.greeting=function(){
    console.log('Hello world')
}
console.log(user.greeting())

user.greeting2=function(){
    console.log('Hello world,${this.name}')
}
console.log(user.greeting2());
//object3-APIS
//DESTRUCTURING 
const course={
    coursename:"js",
    price:"300",
    courseInstructor:'hitest'
}
const {courseInstructor}=course
console.log()

// const navbar = ({})>=


 