// Week03 BOM JS file

// Define a function to retrieve chapters from localStorage or return an empty array
function getChapterList() {
    // Get chapters from localStorage and parse it into an array
    const storedChapters = JSON.parse(localStorage.getItem('chapters'));

    // Return chapters if they exist, otherwise return an empty array
    return storedChapters || [];
}

// Function to set chapters into localStorage
function setChapterList(chapters) {
    // Stringify the chapters array and set it into localStorage
    localStorage.setItem('chapters', JSON.stringify(chapters));
}

// Declare an array named chaptersArray and assign it to the result of getChapterList()
let chaptersArray = getChapterList();

// Function to create a list item and append it to the list
function displayList(item) {
    // Create a li element
    const listItem = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Set delete button text content

    // Populate the li element's text content with the item
    listItem.textContent = item;

    // Append the delete button to the li element
    listItem.appendChild(deleteButton);

    // Append the li element to the unordered list in your HTML
    const list = document.getElementById('list');
    list.appendChild(listItem);

    // Add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', () => {
        deleteChapter(item); // Call deleteChapter function to remove the chapter
        listItem.remove(); // Remove the li element
    });
}

// Function to remove a chapter from the array and localStorage
function deleteChapter(chapter) {
    // Reformat the chapter parameter to remove the ❌ at the end of the string
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

    // Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // Call the setChapterList function to update the localStorage item
    setChapterList(chaptersArray);
}

// Populate the displayed list of chapters
chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

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
        // Call displayList function to add the new chapter to the list
        displayList(inputValue);

        // Update the chaptersArray with the new chapter
        chaptersArray.push(inputValue);
        // Update localStorage with the new chaptersArray
        setChapterList(chaptersArray);

        // Set the input value to an empty string to clean up the interface for the user
        inputField.value = '';

        // Send the focus back to the input element
        inputField.focus();
    } else {
        // If the input is blank, provide a message or return the focus to the input field
        // For now, we'll just return focus to the input field
        inputField.focus();
    }
});
