// compile time errors 
// run time errors

// IDE Integrated Development Enviroment
// 1. visual studio Code
// 2. Atom
// 3. Andriod studio


// try {
// let firstName = "Aden"
// let firstName 
// console.log(firstName.toUpperCase())
// console.log("hello")
// console.log("hello2")
// } catch(error) {
//     console.log("you have an error in your code, please fix it I will not crush ")
// }finally{
//     console.log("this will run regardless of the error")
// }



try{
// open database connection

// let firstName 
// console.log(firstName.toUpperCase())
// console.log("hello")
// console.log("hello2")

let dbError = new Error("couldn't connect to the database");
throw dbError

}catch (error){
    console.log(error.message);


}finally {
    console.log("this will run regardless of the error");
}