// Mother makes a promise
// let motherPromise = new Promise((resolve, reject) => {
//     let sonBehaved = true; // change this to false to test rejection

//     console.log("👩 Mother: If you behave well this week, I'll buy you a phone next week.");

//     setTimeout(() => {
//         if (sonBehaved) {
//             resolve("🎉 Mother: You behaved well, here is your new phone!");
//         } else {
//             reject("😡 Mother: You didn’t behave well, no phone for you.");
//         }
//     }, 3000); // 3 seconds delay to simulate "next week"
// });

// // Son waits for the result of the promise
// motherPromise
//     .then(message => {
//         console.log(message); // runs if resolved
//     })
//     .catch(error => {
//         console.log(error); // runs if rejected
//     })
//     .finally(() => {
//         console.log("📌 The week has ended.");
//     });




    // Mother makes a promise
function motherPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🎉 Mother: Here is your phone, you behaved well!");
        }, 2000);
    });
}

async function sonWaits() {
    console.log("👦 Son: I am waiting patiently...");
    let gift = await motherPromise();  // wait for mother's promise
    console.log(gift);
}

sonWaits();
