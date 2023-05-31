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
  handleSearch(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="tc ">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.handleSearch} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
