            // Function to validate if password matches the confirm password
            function validatePassword() {
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("confirmPassword").value;
                var errorSpan = document.getElementById("passwordMatchError");
        
                if (password !== confirmPassword) {
                    errorSpan.style.display = "inline";
                    document.getElementById("password").value = "";
                    document.getElementById("confirmPassword").value = "";
                    document.getElementById("password").focus();
                } else {
                    errorSpan.style.display = "none";
                }
            }