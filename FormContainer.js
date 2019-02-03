import React, { Component } from 'react'

import FormComponent from './FormComponent'

class FormContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FormComponent 
                data={ this.props.data }
                handleChange = { this.props.handleChange }
                handleSubmit = { this.props.handleSubmit }
            />
        )
    }
     
}

export default FormContainer