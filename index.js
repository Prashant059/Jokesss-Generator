const btn = document.getElementById("joke-btn");


const fetchJoke = async() => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const jokeData = await res.json();

    // Ensure you have a DOM element with an id of 'joke' or update this selector accordingly
    const joke = document.getElementById('joke');
    if (joke) {
        joke.innerHTML = jokeData.joke;
    } else {
        console.error('Element with id "joke" not found.');
    }
};

// Example usage: Make sure to call the function, perhaps on a button click or page load.
fetchJoke();

btn.addEventListener('click', fetchJoke);