// Email validation function
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const signup = document.querySelector(".email-form-1");
const signForFree = document.querySelector(".email-form-2");
const emailInput = document.querySelector(".input-email");
const errorMsg = document.querySelector(".input-error");
const emailInput2 = document.querySelector(".input-email-2");
const errorMsg2 = document.querySelector(".input-error-2");

signup.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = emailInput.value;
    if (isEmailValid(inputValue)){
        errorMsg.classList.add("show-success");
        errorMsg.textContent = "Congraturation";
    }
    else {
        errorMsg.classList.add("show-error");
        errorMsg.textContent = "Please check your email!"
        emailInput.style.border = "1px solid #c61a1a";
    }
    setTimeout(() => {
        emailInput.value = "";
        errorMsg.classList.remove("show-error");
        errorMsg.classList.remove("show-success");
        emailInput.removeAttribute("style")
    }, 3000)
});
signForFree.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = emailInput2.value;
    if (isEmailValid(inputValue)) {
        errorMsg2.classList.add("show-success");
        errorMsg2.textContent = "Congraturation";
    }
    else {
        errorMsg2.classList.add("show-error");
        errorMsg2.textContent = "Please check your email!"
        emailInput2.style.border = "1px solid #c61a1a";
    }
    setTimeout(() => {
        emailInput2.value = "";
        errorMsg2.classList.remove("show-error");
        errorMsg2.classList.remove("show-success");
        emailInput2.classList.remove("input-error-border");
        emailInput2.removeAttribute("style");
    }, 3000)
})