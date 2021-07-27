import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import FavRecipe from './FavRecipe'
import UpdateForm from './UpdateForm'
 class FavoriteRecipes extends Component {
     constructor (props){
         super(props);
         this.state={
             serverLink:process.env.REACT_APP_SERVER ,
             recipes :[] ,
             showFavRecipes :false ,
             showForm :false ,
             recipeName :'' ,
             recipeImage :'' ,
             index :0
         }
     }
     componentDidMount = async ()=>{
        const recipes = await axios.get(`${this.state.serverLink}/getFavoriteRecipies`)
        this.setState({
            recipes :recipes.data ,
            showFavRecipes :true
        })
    }

     deleteRecipeFunc =async (index)=>{
         const id =this.state.recipes[index].id;
         const recipes = await axios.delete(`${this.state.serverLink}/deleteRecipies/${id}`);
         this.setState({
             recipes:recipes.data
         })
     }

     showupdateFormFunc =(idx)=>{
         const chosenRecipe=this.state.recipes[idx];
         this.setState ({
             showForm :true ,
             chosenRecipe :chosenRecipe ,
             recipeName:chosenRecipe.title ,
             recipeImage:chosenRecipe.image_url ,
             index:idx
         })
     }
     updateTitelFunc =(e=>this.setState({recipeName:e.target.value}))
     updateImageFunc =(e=>this.setState({recipeImage:e.target.value}))

updateRecipe =async(e)=>{
    e.preventDefault();
    const id=this.state.recipes[this.state.index].id;
    const recipeData={
        recipeName:this.state.recipeName ,
        recipeImage:this.state.recipeImage
    }
    let recipesUpdate = await axios.put(`${this.state.serverLink}/updateRecipies/${id}`,recipeData);
    this.setState({
        recipes:recipesUpdate.data
    })
}

   
    render() {
        return (
            <div>
             <h2>Favourite Page</h2>   
             {this.state.showForm &&
             <UpdateForm  
             recipeName={this.state.recipeName}
             recipeImage={this.state.recipeImage}
             updateTitelFunc={this.updateTitelFunc}
             updateImageFunc={this.updateImageFunc}
             recipesUpdate={this.recipesUpdate}
             />
             }
             {this.state.showFavRecipes &&
             this.state.recipes.map((recipe ,idx)=>{
                 return(
                     <FavRecipe 
                     index={idx}
                     recipe={recipe}
                     deleteRecipe={this.deleteRecipeFunc}
                     updateRecipe={this.showupdateFormFunc}
                     />
                 )
             })}
            </div>
        )
    }
}

export default FavoriteRecipes
