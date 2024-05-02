// Select the Add Chapter button
const addButton = document.querySelector('button[type="submit"]');

// Add a click event listener to the Add Chapter button
addButton.addEventListener('click', () => {
    // Select the input field
    const inputField = document.getElementById('favchap');
    
    // Get the value of the input field
    const inputValue = inputField.value.trim(); // Trim to remove leading and trailing whitespaces

    // Check if the input is not blank
    if (inputValue !== '') {
        // Create a li element
        const listItem = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Set delete button text content

        // Populate the li element's text content with the input value
        listItem.textContent = inputValue;

        // Append the delete button to the li element
        listItem.appendChild(deleteButton);

        // Append the li element to the unordered list in your HTML
        const list = document.getElementById('list');
        list.appendChild(listItem);

        // Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            listItem.remove(); // Remove the li element
        });

        // Send the focus to the input element
        inputField.focus();

        // Change the input value to an empty string to clean up the interface for the user
        inputField.value = '';
    } else {
        // If the input is blank, provide a message or return the focus to the input field
        // For now, we'll just return focus to the input field
        inputField.focus();
    }
});
