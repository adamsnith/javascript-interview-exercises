(() => {
    const companies = [
        { id: 1, name: "Amazon", location: "Seattle" },
        { id: 2, name: "Apple", location: "Cupertino" },
        { id: 3, name: "Facebook", location: "Menlo Park" },
        { id: 4, name: "Google", location: "Mountain View" },
        { id: 5, name: "Leeroy", location: "Sundsvall" },
        { id: 6, name: "Tesla", location: "Palo Alto" }
    ];

    // Get the list
    const list = document.getElementById("list");

    // Wrap the name and location of each company
    const listItems = companies
        .map(company => `<li>${company.name} - ${company.location}</li>`)
        .join("");

    // Attach to list
    list.innerHTML = listItems;
})();
