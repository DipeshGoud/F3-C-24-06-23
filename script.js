const user = localStorage.getItem('user');

if (user) {
    // Access token exists, redirect to profile page
    window.location.href = 'profile.html';
} else {
    const profile = document.getElementById('profile-link');
    profile.removeAttribute('href');
    profile.addEventListener('click', () => {
        alert('Please Signed Up first');
    })




    // adding eventlistner to form
    let form = document.getElementById("signup-form");
    form.addEventListener('submit', formSignup);


    // Function to handle form submission
    function formSignup(event) {
        event.preventDefault();

        // Get user details from the form
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();
        const confirmPasswordInput = document.getElementById('confirm-password').value.trim();
        const message = document.getElementById('message');

        // Validating form input
        if (nameInput === "" || emailInput === "" || passwordInput === "" || confirmPasswordInput === "") {
            message.innerText = "Error : All the fields are mandatory";
            message.classList.add('error');
        }
        else if (passwordInput != confirmPasswordInput) {
            message.innerText = "Please make sure your password match";
            message.classList.add('error');
        } else {
            message.innerText = "Successfully Signed Up!";
            message.classList.add('success');

            // Generate access token
            const accessToken = generateAccessToken();

            // Creating Object
            const user = {
                accessToken: accessToken,
                name: nameInput,
                email: emailInput,
                password: passwordInput,
                confirmPassword: confirmPasswordInput
            };

            // Adding to local Storage
            localStorage.setItem('user', JSON.stringify(user));

            // Redirecting to Profile-Page
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 500)
        }
    }

    // Generate a random 16-byte access token
    function generateAccessToken() {
        const accessTokenBytes = new Uint8Array(16);
        window.crypto.getRandomValues(accessTokenBytes);
        return Array.from(accessTokenBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    }


}

