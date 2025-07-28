
// let student1 = {
//     firstName : "Aden",
//     lastName : "Abdi",
//     age : 20,
//     }



// let student2 = {
//  firstName : "Miski",
//  lastName : "Hassan",
//  age : 25
// }

// console.log(student1)
// console.log(student2)
// console.log(student1.firstName)
// console.log(student1.lastName)
// console.log(`age of ${student1.firstName} is ${student1.age}`)
// // delete student1.age
// console.log(student1)

// let person = new Object();
// person.firstName = "Aden";
// person.lastName = "Abdi";
// person.age = 20;
// // console.log(person)

// person.talk = function(){
//     console.log("Aden is talking to his Mother")
//     }

//     person.talk()

// let person ={}
// console.log(person)
// person["firstName"] = "Aden"
// person["lastName"] = "Abdi"
// console.log(person)

// let person = {
//     firstName : "Aden",
//     age : 20,
//     }
// let {firstName} = person
// // let {age} = person
// console.log(firstName)

let person = {
    firstName : "Aden",
    age : 20,
    isMarried : true
    }

    for (let prop in person){
        // console.log(prop)
        console.log(person[prop])
        }
