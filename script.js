const form = document.getElementById("jobForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");
    let success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    // Empty Field Validation

    if(name === "" || email === "" || phone === "" || message === ""){
        error.textContent = "All fields are required!";
        return;
    }

    // Email Validation

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        error.textContent = "Enter a valid email address!";
        return;
    }

    // Phone Validation

    let phonePattern =
    /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        error.textContent =
        "Phone number must contain exactly 10 digits!";
        return;
    }

    success.textContent =
    "Application submitted successfully!";

    form.reset();
});