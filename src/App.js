import React, {Component} from 'react'
import './App.css';
import Card from './components/card-files/card-body' 
class App extends Component{

  constructor(){
    
    //call constructor on the component class
    super();
    this.state = { 
      monster: [],
      searchField: ""
    }

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monster: users}));
  }


  render(){
    return (  
    <div className="App">
    <input type="search" placeholder="Search Monsters" onChange={a => this.setState({searchField: a.target.value}) }/>
    <Card monsters={this.state.monster}>
    </Card>
    </div>
    );}
}

export default App;
