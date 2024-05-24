// Declare the URL variable
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with id 'cards'
const cards = document.querySelector('#cards');

// Create an async function to fetch the prophet data
async function getProphetData() {
    // Fetch the data from the URL
    const response = await fetch(url);
    // Convert the response to JSON
    const data = await response.json();
    // Call the displayProphets function with data.prophets
    displayProphets(data.prophets);
}

// Function to create and display cards
const displayProphets = (prophets) => {
    // Iterate through each prophet in the data
    prophets.forEach(prophet => {
        // Create a section element for each prophet card
        const card = document.createElement('section');
        card.className = 'card';
        
        // Create an h2 element for the prophet's full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create p elements for additional information
        const birthDate = document.createElement('p');
        birthDate.textContent = `Born: ${prophet.birthdate}`;
        
        const birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Create an img element for the prophet's portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');
        
        // Append the elements to the card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        
        // Append the card to the cards container
        cards.appendChild(card);
    });
};

// Call the getProphetData function to fetch and display the data
getProphetData();
