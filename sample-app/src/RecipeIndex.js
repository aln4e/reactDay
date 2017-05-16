import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

class RecipeIndex extends Component {
  componentWillMount(){
    {/* the setState method tells React that this component (RecipeIndex) needs to be re-rendered with the updated state. This is needed in this case because there are multiple list items*/}
    {/*recipes: Recipes on line 10 looks at the recipes within the Recipes.js file*/}
    this.setState({
      recipes: Recipes
    })
  }
  render() {
    let list = this.state.recipes.map(function(recipe){
      return(
        <li key={recipe.id}>
        {/*the $ in line 14 enables simple string interpolation*/}
          <Link to={`/recipes/${recipe.id}`} >
            {recipe.name}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default RecipeIndex;
