document.addEventListener('DOMContentLoaded', () => {
    const directoryElement = document.getElementById('member-directory');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch and display member data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data, 'grid');
        });

    // Function to display members
    function displayMembers(members, view) {
        directoryElement.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member', view);

            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;

            directoryElement.appendChild(memberElement);
        });
    }

    // Event listeners for toggle buttons
    gridViewButton.addEventListener('click', () => {
        directoryElement.classList.add('grid-view');
        directoryElement.classList.remove('list-view');
        updateView('grid');
    });

    listViewButton.addEventListener('click', () => {
        directoryElement.classList.add('list-view');
        directoryElement.classList.remove('grid-view');
        updateView('list');
    });

    function updateView(view) {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                displayMembers(data, view);
            });
    }
});