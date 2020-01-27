import React, { Component } from "react";
import "./styles.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monesters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    // alert("hello");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monesters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monesters={this.state.monesters} />
      </div>
    );
  }
}

export default App;
