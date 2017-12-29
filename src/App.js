import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
      userNames: [
          {name: "Paul"},
          {name: "Sam"},
          {name: "Mike"}
      ]
  }
  
  nameChangeHandler = (event) => {
        this.setState( {
             userNames: [
                { name: event.target.value},
                { name: "Sam"},
                { name: "Mike"}
             ]
        })
    }
    
  render() {
      
    return (  
      <div className="App">
        <UserInput
            changed={this.nameChangeHandler}
            name={this.state.userNames[0].name}
          />
        <UserOutput name={this.state.userNames[0].name}/>
        <UserOutput name={this.state.userNames[1].name}/>
        <UserOutput name={this.state.userNames[2].name}/>
      </div>
    );
  }
}

export default App;
