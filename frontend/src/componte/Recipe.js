import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
export class Recipe extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.recipe.image_url} />
  <Card.Body>
    <Card.Title>{this.props.recipe.title}</Card.Title>
    <Card.Text>
    {this.props.recipe.description}
    </Card.Text>
    <Button variant="primary"onClick={()=>this.props.addToFav(this.props.recipe)}>Favourite</Button>
  </Card.Body>
</Card>
        )
    }
}

export default Recipe
