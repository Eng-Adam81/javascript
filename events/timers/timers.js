function  sayMyName() {
    console.log("Hello,  " + "Aden");
}
// sayMyName("Aden")
// setTimeout(sayMyName,5000)

let timer = setInterval(sayMyName,1000)
// clearInterval(timer)

setTimeout(function() {
    clearInterval(timer)
}, 10000)