document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const blogList = document.querySelector('.blogList');

    // Function to add a new blog post
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const carMake = document.getElementById('car-make').value;
        const carModel = document.getElementById('car-model').value;
        const year = document.getElementById('year').value;
        const description = document.getElementById('description').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${carMake} ${carModel} (${year})</h3>
            <p>${description}</p>
        `;

        blogList.appendChild(listItem);

        // Clear the form
        form.reset();
    });
});