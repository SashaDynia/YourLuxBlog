const blogList = document.querySelector(".blogList");

export function makehtml(data) {
    const markup = data.map(item => {
        return `
            <li>
                <h1>${item.carMake} ${item.carModel} (${item.year})</h1>
                <p>${item.description}</p>
                <p>${item.date}</p>
                <button class="delete" id="${item.id}">Delete</button>
                <button class="update" id="${item.id}">Update</button>
            </li>`;
    }).join(" ");
    blogList.innerHTML = markup;
    return markup;
}