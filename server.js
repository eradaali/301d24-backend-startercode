'use strict';
const express=require('express');
const cors=require('cors');
const axios =require('axios');
require('dotenv').config();
const mongoose=require('mongoose');
const server =express();
server.use(cors());


server.use(express.json());

const PORT=process.env.PORT;
mongoose.connect(`mongodb://127.0.0.1:27017/finalexam`, 
                {useNewUrlParser: true, useUnifiedTopology:true});
const recipeSchema = new mongoose.Schema({
    title:String,
    description:String,
    ingredients:String,
    image_url:String,
    id:String
})
    const myRecipeModel = mongoose.model('recipe',recipeSchema);


server.get('/',testHandeler);
server.get('/recipes',recipesHandeler);
server.post('/addToFavorite',favoriteHandler);
server.get('/getFavoriteRecipies',getFavoriteHandler);
server.delete('/deleteRecipies',deleteHandler);
server.put('/updateRecipies',updateHandler);


function testHandeler(req,res){
    res.send('test');
}

function favoriteHandler (req,res){
    console.log(req,body);
    const {title,description,image_url,id,ingredients}=req.body;
    const newRecipe = new myRecipeModel ({
        title:title ,
        description:description ,
        image_url:image_url ,
        id:id ,
        ingredients:ingredients
    })
}

function recipesHandeler(req,res){
    console.log(req.query);
    const ingredient =req.query.ingredient ;
    const url =`https://coffeepedias.herokuapp.com/coffee-list/?${ingredient}=Black`;
    axios.get(url).then (result =>{
        const recipeArray=result.data.map(recipe =>{
            // console.log(recipe);
            return new Recipe (recipe)
        })
    })
}
function getFavoriteHandler (req,res){
    myRecipeModel.find({},(error,favData)=>{
res.send(favData);
    })

}
function deleteHandler(req,res){
    const id =req.parmas.id;
    myRecipeModel.remove({id:id},(error,data)=>{
        myRecipeModel.find({},(error,data)=>{
            res.send(data);
        })
    })
}
function updateHandler (req,res){
    const{recipeName,recipeImage,recipeingredients}=req.body ;
    const id =req.parmas.id ;
    myRecipeModel.findOne({id:id},(error,data1)=>{
        data1.title=recipeName ;
        data1.image_url=recipeImage;
        data1.ingredients=recipeingredients;
        data1.save().then(()=>{
            myRecipeModel.find({},(error,data)=>{
                res.send(data);
            })
        })
    })
}


class Recipe {
    constructor(data){
        this.title=data.recipe.title ;
        this.description=data.recipe.description ;
        this.ingredients=data.recipe.ingredients ;
        this.image_url=data.recipe.image_url ;
        this.id=data.recipe.id ;
    }
}

// const {
//     home,
//     getFavoriteCoffee,
//     createItemController,
//     updateItemController,
//     deleteItemController,
//     retreiveItemsController 
// }=require('./controllers/coffee.controller');



// app.get('/',home);
// app.get('/fav-list',getFavoriteCoffee);
// app.get('/retreive', retreiveItemsController );
// app.post('/create',createItemController);
// app.put('/update/:id',updateItemController);
// app.delete('/delete/:id',deleteItemController);

server.listen(PORT, ()=>{
    console.log(`listing on PORT${PORT}`);
});