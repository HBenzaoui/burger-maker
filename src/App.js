import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import BurgerMaker from './containers/BurgerMaker/BurgerMaker'

class App extends Component {
  render() {
    return (
      <div>
        <Layout >
          <BurgerMaker></BurgerMaker>
        </Layout>
      </div>
    );
  }
}

export default App;
