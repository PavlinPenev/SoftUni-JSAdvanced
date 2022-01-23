function validate() {

    document.querySelector("#submit").type = "button";

    document.querySelector("#company").addEventListener("change", (e) => {

        if (document.querySelector("#company").checked) {

            document.querySelector("#companyInfo").style.display = "block";

        } else {

            document.querySelector("#companyInfo").style.display = "none";

        }

    });

    document.querySelector("#submit").addEventListener("click", (e) => {

        let flagsArray = [];
        let username = document.querySelector("#username");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let confirmPass = document.querySelector("#confirm-password");
        let checkBox = document.querySelector("#company");
        
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let passwordPattern = /^[\w]{5,15}$/;

        if (usernamePattern.exec(username.value) === null) {

            username.style.borderColor = "red";
            flagsArray.push(false);

        } else {

            username.style.borderColor = "";
            flagsArray.push(true);

        }

        if (emailPattern.exec(email.value) === null) {

            email.style.borderColor = "red";
            flagsArray.push(false);

        } else {

            email.style.borderColor = "";
            flagsArray.push(true);

        }

        if (password.value === confirmPass.value &&
            passwordPattern.exec(confirmPass.value) != null &&
            passwordPattern.exec(password.value) != null) {

            confirmPass.style.borderColor = "";
            password.style.borderColor = "";
            flagsArray.push(true);

        } else {

            confirmPass.style.borderColor = "red";
            password.style.borderColor = "red";
            flagsArray.push(false);

        }

        if (checkBox.checked) {

            let company = document.querySelector("#companyNumber");

            if (company.value < 1000 || company.value > 9999) {

                company.style.borderColor = "red";
                flagsArray.push(false);

            } else {

                company.style.borderColor = "";
                flagsArray.push(true);

            }
        }

        if (!flagsArray.includes(false)) {

            document.querySelector("#valid").style.display = "block";

        } else {

            document.querySelector("#valid").style.display = "none";

        }
    });
}