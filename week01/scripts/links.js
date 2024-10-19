const baseURL = "https://marius-woke.github.io/wdd230/"; // Replace with your actual GitHub URL
const linksURL = `https://marius-woke.github.io/wdd230/week01/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const activitiesContainer = document.querySelector('.card ul');
    activitiesContainer.innerHTML = ''; // Clear existing static content

    weeks.weeks.forEach(week => {
        // Create a week heading
        const weekHeading = document.createElement('h3');
        weekHeading.textContent = week.week;
        activitiesContainer.appendChild(weekHeading);

        // Create links for each activity
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);
            activitiesContainer.appendChild(listItem);
        });
    });
}

getLinks();
