import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots.js";
import SearchBox from "./SearchBox";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }
  handleSearch = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc ">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.handleSearch} />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}

export default App;
