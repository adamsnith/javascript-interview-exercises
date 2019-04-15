import React from "react";

const Filter = ({ data, handleFilter }) => {
    let filterItems = data.map(location => (
        <label className="container" htmlFor={location} key={location}>
            {location}
            <input
                className="checkbox"
                onClick={() => handleFilter(location)}
                type="checkbox"
                name={location}
                id={location}
            />
            <span className="checkmark" />
        </label>
    ));
    return <div>{filterItems}</div>;
};

export default Filter;
