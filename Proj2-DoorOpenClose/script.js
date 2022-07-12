const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Open")
    formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Close")
    formsWrapper.classList.remove("change");
});