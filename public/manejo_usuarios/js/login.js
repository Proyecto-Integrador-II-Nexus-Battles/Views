
const email = document.getElementById('email');
const password = document.getElementById('password');

login.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.log(email)
    const jsonData = {
        email,
        password,
    };

    try {
        const response = fetch('http://localhost:3000/usuario/logIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(jsonData),
        });

        if (response.ok) {
            console.log('holis')
        } else {

        }
    } catch (error) {

        console.error('Error submitting login form:', error);
    }
})
