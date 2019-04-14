import React, { Component } from "react";
import { getData } from "../services/fakeAPI";
import Filter from "./filter";
import List from "./list";

class FilteredList extends Component {
    state = {
        filteredCities: []
    };

    componentDidMount() {
        getData().then(data => {
            this.setState({ data });
        });
    }

    // Returns unique set of locations based on data
    getLocations = () => {
        return [...new Set(this.state.data.map(company => company.location))];
    };

    // Returns list items based on filtered cities
    getListItems = () => {
        let { filteredCities, data } = this.state;
        return filteredCities.length
            ? data.filter(item => filteredCities.includes(item.location))
            : data;
    };

    // Filters cities based on props from <Filter>
    handleFilter = filteredCity => {
        let cities = this.state.filteredCities;
        cities = cities.includes(filteredCity)
            ? cities.filter(city => city !== filteredCity)
            : [...cities, filteredCity];

        this.setState({ filteredCities: cities });
    };

    render() {
        if (!this.state.data) {
            return <div>Loading</div>;
        }
        return (
            <div>
                <Filter
                    handleFilter={this.handleFilter}
                    data={this.getLocations()}
                />
                <List data={this.getListItems()} />
            </div>
        );
    }
}

export default FilteredList;
