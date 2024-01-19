let buttonOpenModal = document.getElementById("openModal")
let modale = document.getElementById("modale")
let signUp = document.getElementById("signUp")
// let signUpTog = document.getElementsByClassName("signUpTog")
let formSignIn = document.getElementById("formSignIn")
let formLogIn = document.getElementById("formLogIn")
let signIn = document.getElementById("signIn")
let logIn = document.getElementById("logIn")
let closing = document.querySelectorAll(".close")
console.log(closing);

let body = document.querySelector("body")
    logIn.style.backgroundColor = "#810909be";

buttonOpenModal.addEventListener("click", function () {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("body").style.opacity= "100%";
    logIn.style.backgroundColor = "#810909be";
    modale.classList.add("d-felx")
    modale.classList.remove("d-none")
})
signIn.addEventListener("click", function () {
    formSignIn.classList.add("d-flex")
    formSignIn.classList.remove("d-none")
    formLogIn.classList.remove("d-flex")
    formLogIn.classList.add("d-none")
    signIn.style.backgroundColor = "#810909be";
    logIn.style.removeProperty("background-color");
})
logIn.addEventListener("click", function () {
    formSignIn.classList.add("d-none")
    formSignIn.classList.remove("d-flex")
    formLogIn.classList.remove("d-none")
    formLogIn.classList.add("d-flex")
    logIn.style.backgroundColor = "#810909be";
    signIn.style.removeProperty("background-color");
})
closing.forEach(element => {
    element.addEventListener("click", function () {
        modale.classList.toggle("d-none")
        document.getElementById("body").style.overflowY = "scroll";
    })
});


// *******

let buttonStarters = document.getElementById("buttonStarters")
let buttonBreakfast = document.getElementById("buttonBreakfast")
let buttonLunch = document.getElementById("buttonLunch")
let buttonDinner = document.getElementById("buttonDinner")

let Starters = document.getElementById("Starters")
let Breakfast = document.getElementById("Breakfast")
let Lunch = document.getElementById("Lunch")
let Dinner = document.getElementById("Dinner")



// function Remove() {
//     allmenu.forEach(element => {
//         element.classList.toggle("d-block")
//         element.classList.toggle("d-none")
//         console.log(element);
//     });
// }


buttonStarters.addEventListener("click", function () {
    // document.body.style.overflowY = "hidden";
    Starters.classList.remove("d-none")
    Starters.classList.add("d-block")
    Breakfast.classList.add("d-none")
    Lunch.classList.add("d-none")
    Dinner.classList.add("d-none")
})
buttonBreakfast.addEventListener("click", function () {
    Starters.classList.remove("d-block")
    Starters.classList.add("d-none")

    Breakfast.classList.add("d-block")
    Breakfast.classList.remove("d-none")

    Dinner.classList.remove("d-block")
    Dinner.classList.add("d-none")

})
buttonLunch.addEventListener("click", function () {
    Starters.classList.remove("d-block")
    Starters.classList.add("d-none")

    Breakfast.classList.remove("d-block")
    Breakfast.classList.add("d-none")

    Lunch.classList.add("d-block")
    Lunch.classList.remove("d-none")

})
buttonDinner.addEventListener("click", function () {
    Starters.classList.remove("d-block")
    Starters.classList.add("d-none")

    Breakfast.classList.remove("d-block")
    Breakfast.classList.add("d-none")

    Lunch.classList.add("d-none")
    Lunch.classList.remove("d-block")

    Dinner.classList.remove("d-none")
    Dinner.classList.add("d-block")

})
