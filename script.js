(() => {
    const companies = [
        { id: 1, name: "Amazon", location: "Seattle" },
        { id: 2, name: "Apple", location: "Cupertino" },
        { id: 3, name: "Facebook", location: "Menlo Park" },
        { id: 4, name: "Google", location: "Mountain View" },
        { id: 5, name: "Leeroy", location: "Sundsvall" },
        { id: 6, name: "Tesla", location: "Palo Alto" }
    ];

    let uniqueLocations = [
        ...new Set(companies.map(company => company.location))
    ];

    const list = document.getElementById("list");
    const filter = document.getElementById("filter");

    // Attach to list
    list.innerHTML = getListItems(uniqueLocations);

    // Attach to filter field
    filter.innerHTML = getLocations();

    /**
     * Returns wrapped input and label of unique locations
     */
    function getLocations() {
        return uniqueLocations
            .map(
                location =>
                    `<input class="js-filter" type="checkbox" name="${location}"> 
					${location}`
            )
            .join("");
    }

    /**
     * Returns one or array of wrapped list item with companies.
     * @param {string|string[]} checkedLocations - One or several locations.
     */
    function getListItems(checkedLocations) {
        return companies
            .filter(company =>
                checkedLocations.length > 0
                    ? checkedLocations.includes(company.location)
                    : company
            )
            .map(
                company =>
                    `<li class="js-clickable" id="${company.id}">
						${company.name} - ${company.location}
					</li>`
            )
            .join("");
    }

    /**
     * Filters list by inputing checked locations to getListItems()
     */
    function filterItems() {
        let checkedLocations = [
            ...document.querySelectorAll(".js-filter:checked")
        ].map(a => a.name);
        list.innerHTML = getListItems(checkedLocations);
    }

    const filterElements = document.querySelector("#filter");
    const listElements = document.querySelector("#list");

    // Add Event listeners to parents
    filterElements.addEventListener("click", () => filterItems());
    listElements.addEventListener("click", e => {
        console.log(companies.filter(company => company.id == e.target.id));
    });
})();
