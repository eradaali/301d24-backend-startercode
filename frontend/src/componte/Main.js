import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './Recipe';
export class Main extends Component {
    constructor (props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER ,
            showRecipes :false ,
            recipes:[]
        }
    }
    componentDidMount = async ()=>{
        const recipes = await axios.get(`${this.state.serverLink}/ingredient=Black`);
        console.log(recipes.data);
        // console.log(data);
        this.setState({
            showRecipes :true ,
            recipes:recipes.data
            // recipes:data
        })
    }
    addFavFuc =async(recipeData)=>{
        await axios.post(`${this.state.serverLink}/addToFavorite`,recipeData);
    }
    render() {
        return (
            <>
             <h2>Home Page</h2> 
             {this.state.showRecipes &&
             this.state.recipes.map((recipe,idx)=>{
                 return (<Recipe 
                    recipe={recipe}
                    idx={idx}
                    addFavFuc={this.addFavFuc}
                 />)
             })}  
            </>
        )
    }
}

export default Main
