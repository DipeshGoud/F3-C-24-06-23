

const user = localStorage.getItem('user');
console.log(user);
if (!user) {
    // Access token exists, redirect to profile page
    window.location.href = 'index.html';
} else {
    const signup = document.getElementById('signup-link');
    signup.removeAttribute('href');
    signup.addEventListener('click', () => {
        alert("You already Signed Up");
    })


    // Rendering data in profile page
    renderProfile();

    // Function for rendering data
    function renderProfile() {
        const name = document.getElementById('p-name');
        const email = document.getElementById('p-email');
        const password = document.getElementById('p-password');

        // Getting data from local storage
        let user = JSON.parse(localStorage.getItem('user'));

        name.innerText = user.name;
        email.innerText = user.email;
        password.innerText = user.password;
    }

    // Adding event listener to logout
    const logout = document.getElementById('logoutButton');
    logout.addEventListener('click', logMeOut);

    function logMeOut() {
        // Removing access token from local storage
        localStorage.removeItem('user');

        // Redirect to signup page
        window.location.href = 'index.html';
    }

}


