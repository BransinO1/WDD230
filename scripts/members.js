document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMemberSpotlights(data);
        })
        .catch(error => console.error('Error fetching member data:', error));
});

function displayMemberSpotlights(members) {
    // Filter members with "Silver" or "Gold" membership levels
    const filteredMembers = members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');

    // Randomly select two or three members
    const selectedMembers = [];
    const numberOfMembers = Math.min(3, filteredMembers.length);
    while (selectedMembers.length < numberOfMembers) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        const selectedMember = filteredMembers.splice(randomIndex, 1)[0];
        selectedMembers.push(selectedMember);
    }

    // Update the HTML with the selected members' information
    const spotlightContainer = document.querySelector('.spotlight-container');
    spotlightContainer.innerHTML = selectedMembers.map(member => `
        <div class="spotlight-member">
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>${member.otherInfo}</p>
        </div>
    `).join('');
}