import React, { Component } from 'react'

import FormComponent from './FormComponent'

class FormContainer extends Component {

    constructor(props) {
        super()
        this.state = {
            data: props.data
        }
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <FormComponent 
                data={ this.state }
                handleChange = { this.handleChange }
            />
        )
    }
     
}

export default FormContainer