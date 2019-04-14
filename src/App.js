import React, { Component } from "react";
import FilteredList from "./component/filteredList";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <FilteredList />
            </div>
        );
    }
}

export default App;
