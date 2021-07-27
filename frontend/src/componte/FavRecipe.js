import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
 class FavRecipe extends Component {
     constructor (props){
         super(props)
     }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.recipe.image_url} />
            <Card.Body>
              <Card.Title>{this.props.recipe.title}</Card.Title>
              <Card.Text>
              {this.props.recipe.ingredients}
              </Card.Text>
              
              <Button variant="primary" onClick={()=>this.props.deleteRecipe(this.props.index)}>Delete</Button>
              <Button variant="primary" onClick={()=>this.props.updateRecipe(this.props.index)}>Update</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default FavRecipe
