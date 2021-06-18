import React, {Component} from 'react'
import './App.css';
import Card from './components/card-files/card-body' 
import Search from "./components/search-files/searchbox"
class App extends Component{

  constructor(){
    
    //call constructor on the component class
    super();
    this.state = { 
      monster: [],
      searchField: ``
    }

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monster: users}));
  }


  render(){
    const {monster, searchField} = this.state;
    var filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (  
    <div className="App">
    <Search placeholder="Search Monsters" handleChange={a => this.setState({searchField: a.target.value})}/>
    <Card monsters={filteredMonsters}>
    </Card>
    </div>
    );}
}

export default App;
