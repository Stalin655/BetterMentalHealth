const forms= document.querySelector(".forms"), 
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eye-icon.addEventListener("click", () => {
        let pwFields = eye-icon.parentElement.parentElement.querySelectorAll(".passsword");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eye-icon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eye-icon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})