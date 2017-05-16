import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import RecipeDetail from './RecipeDetail'
import Footer from './Footer'

class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Header name="Nick" lastName="Bouldien"/>
            {/*the path on line 15 should redirect to it's associated component. Likewise on line 16*/}
              <Route exact path="/" component={RecipeIndex} />
              <Route path='/recipes/:id' component={RecipeDetail} />
            <div>
              <Footer />
            </div>
          </div>
       </Router>
    );
  }
  }

export default App;
