import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name : "abx",age : 30, belt : 'black', id:1},
      {name : "wxe",age : 25, belt : 'pink', id:2},
      {name : "khy",age : 23, belt : 'red', id:3}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is a test header</h1>
         <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         <Ninjas ninjas ={this.state.ninjas}/>
        </header>
      </div>
    );
  }
}

export default App;
