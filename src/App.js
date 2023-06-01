import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import React from "react";
import Scroll from "./Scroll";
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
    if (this.state.robots.length === 0) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="tc ">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox onSearchChange={this.handleSearch} />
          <Scroll>
            <CardList robots={filteredRobot} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
