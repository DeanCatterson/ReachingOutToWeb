import React, { Component } from 'react';

import Banner from './containers/Blog/Banner/Banner';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Blog />
      </div>
    );
  }
}

export default App;
