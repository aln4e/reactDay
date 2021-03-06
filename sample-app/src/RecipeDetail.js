import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

{/*componentWillMount method happens before render*/}
class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({
      recipeId: id
    })
    let recipe = this.state.recipes.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(recipe){
      this.setState({
        recipe: recipe
      })
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.recipe.name}</h2>
      </div>
    );
  }
}

export default RecipeDetail;
