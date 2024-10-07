import { Component } from "react";

class App extends Component {
  constructor() {
    console.log("constructor: App");
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount: App");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
            searchValue: "",
          };
        })
      );
  }

  searchHandler = (event) => {
    const value = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {
        searchValue: value,
      };
    });
  };

  render() {
    console.log("render: App");
    console.log(this.state);

    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchValue)
    );

    return (
      <div>
        <input type="search" onChange={this.searchHandler} />

        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
