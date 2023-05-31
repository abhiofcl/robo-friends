import "./App.css";
import Card from "./Card";
import CardList from "./CardList";
import { robots } from "./robots.js";
function App() {
  return <CardList robots={robots} />;
}

export default App;
