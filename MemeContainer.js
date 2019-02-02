import React, { Component } from 'react'

import MemeComponent from './MemeComponent'

class MemeContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MemeComponent data={ this.props.data } />
        )
    }
}

export default MemeContainer