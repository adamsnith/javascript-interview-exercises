import React from "react";

const Filter = ({ data, handleFilter }) => {
    let filterItems = data.map(location => (
        <span key={location}>
            <input
                onClick={() => handleFilter(location)}
                type="checkbox"
                name={location}
                id={location}
            />
            <label htmlFor={location}>{location}</label>
        </span>
    ));
    return <div>{filterItems}</div>;
};

export default Filter;
