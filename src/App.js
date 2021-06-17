import React, {Component} from 'react'
import './App.css';
import Card from './components/card-files/card-body' 
class App extends Component{

  constructor(){
    
    //call constructor on the component class
    super();
    this.state = { 
      monster: []
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
    <Card monsters={this.state.monster}>
    </Card>
    </div>
    );}
}

export default App;
