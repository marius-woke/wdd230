let currentView = 'grid';

async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members, currentView);
}

function displayMembers(members, view) {
    const container = document.getElementById('directory-container');
    container.className = view; // Set grid or list class

    container.innerHTML = members.map(member => {
        if (view === 'grid') {
            return `
                <div class="member-card">
                    <img src="images/${member.icon}" alt="${member.name} logo">
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">${member.website}</a>
                    </div>
                </div>
            `;
        } else { // list view with columns
            return `
                <div class="member-card">
                    <div class="member-name">${member.name}</div>
                    <div class="member-address">${member.address}</div>
                    <div class="member-phone">${member.phone}</div>
                    <div class="member-website"><a href="${member.website}" target="_blank">${member.website}</a></div>
                </div>
            `;
        }
    }).join('');
}

function toggleView(view) {
    currentView = view;
    loadMembers();
}

document.addEventListener('DOMContentLoaded', loadMembers);