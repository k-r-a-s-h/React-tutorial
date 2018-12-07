import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      {name : "abx",age : 30, belt : 'black', id:1},
      {name : "wxe",age : 25, belt : 'pink', id:2},
      {name : "khy",age : 23, belt : 'red', id:3}
    ]
  }

  addNinja =(ninja)=>{
    ninja.id = Math.random();
    let ninjas =[...this.state.ninjas,ninja]
    this.setState({
      ninjas:ninjas
    })
  }
  deleteNinja =(id)=>{
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is a test header</h1>
         <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         <Ninjas ninjas ={this.state.ninjas} deleteNinja={this.deleteNinja}/>
         <AddNinja addNinja={this.addNinja}/>
        </header>
      </div>
    );
  }
}

export default App;
