document.addEventListener("DOMContentLoaded", () => {
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const memberDirectory = document.getElementById("member-directory");
    let membersData = [];

    // Fetch the JSON data with the correct relative path
    fetch('../data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            membersData = data;
            displayMembers(data, 'grid');
        })
        .catch(error => console.error('Error fetching data:', error));

    // Event listeners for view toggle buttons
    gridViewButton.addEventListener("click", () => displayMembers(membersData, 'grid'));
    listViewButton.addEventListener("click", () => displayMembers(membersData, 'list'));

    // Function to display members in the specified view
    function displayMembers(members, view) {
        memberDirectory.innerHTML = ''; // Clear previous content
        memberDirectory.className = view === 'grid' ? 'grid-view' : 'list-view';

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            memberDiv.innerHTML = `
                <img src="../images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;

            memberDirectory.appendChild(memberDiv);
        });
    }
});