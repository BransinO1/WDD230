const baseURL = 'https://bransino1.github.io/wdd230';
const linksURL = `${baseURL}/data/links.json`;

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Test JSON result
        displayLinks(data.weeks); // Call displayLinks function
    } catch (error) {
        console.error('There was a problem with the fetch request:', error);
    }
};

const displayLinks = (weeks) => {
    const learningActivities = document.querySelector('.learning-activities ul');
    learningActivities.innerHTML = ''; // Clear existing content
    weeks.forEach((week) => {
        const weekItem = document.createElement('li');
        weekItem.innerHTML = `<strong>${week.week}:</strong>`;
        const linksList = document.createElement('ul');
        week.links.forEach((link) => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}/${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
        weekItem.appendChild(linksList);
        learningActivities.appendChild(weekItem);
    });
};

getLinks();
