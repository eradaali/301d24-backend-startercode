
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../src/componte/Header'
import FavoriteRecipes from '../src/componte/FavoriteRecipes'
import Main from '../src/componte/Main'
 class App extends Component {
  render() {
    return (
      <>
       <Header/> 
       <BrowserRouter>
       <Switch>
         <Route exact path='/'>
<Main/>

         </Route>
         <Route exact path='/favorite'>
<FavoriteRecipes/>

         </Route>

       </Switch>
       </BrowserRouter>
      </>
    )
  }
}

export default App
