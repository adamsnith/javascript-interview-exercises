import React, { Component } from "react";
import { setFilter, setData } from "../actions/filterActions";
import { getData } from "../services/fakeAPI";
import { connect } from "react-redux";
import Filter from "./filter";
import List from "./list";

class FilteredList extends Component {
    componentDidMount() {
        getData().then(data => {
            this.props.setData(data);
        });
    }

    // Returns unique set of locations based on data
    getLocations = () => {
        return [...new Set(this.props.data.map(company => company.location))];
    };

    // Returns list items based on filtered cities
    getListItems = () => {
        let { filteredCities, data } = this.props;
        return filteredCities.length
            ? data.filter(item => filteredCities.includes(item.location))
            : data;
    };

    // Adds and removes filtered cities to state
    handleFilter = filteredCity => {
        let cities = this.props.filteredCities;
        cities = cities.includes(filteredCity)
            ? cities.filter(city => city !== filteredCity)
            : [...cities, filteredCity];
        this.props.setFilter(cities);
    };

    render() {
        if (!this.props.data) {
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

const mapStateToProps = state => ({
    filteredCities: state.app.filteredCities,
    data: state.app.data
});

export default connect(
    mapStateToProps,
    { setFilter, setData }
)(FilteredList);
