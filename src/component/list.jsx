import React from "react";

const List = ({ data }) => {
    const listItems = data.map(company => (
        <li
            onClick={() => console.log(company)}
            id={company.id}
            key={company.id}
        >
            {company.name} - {company.location}
        </li>
    ));
    return <ul>{listItems}</ul>;
};

export default List;
