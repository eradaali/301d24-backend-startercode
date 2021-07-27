import React, { Component } from 'react'

 class UpdateForm extends Component {
    render() {
        return (
            <>
            <form>
                <label>
                    Coffee Name :
                    <input type='text'value={this.props.recipeName}  onChange={this.props.updateTitelFunc}/>
                </label>
                <label>
                    Image Coffee :
                    <input type='text'value={this.props.recipeImage}  onChange={this.props.updateImageFunc}/>
                </label>
                </form>    
            </>
        )
    }
}

export default UpdateForm
