import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  handleSearch = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }

  render() {
    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc ">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.handleSearch} />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}

export default App;
