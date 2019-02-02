import React, {Component} from 'react'

import Form from './FormContainer'
import Meme from './MemeContainer'

class MemeGenerator extends Component {

    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'https://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImages: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <Form 
                    data={ this.state }
                    handleChange={ this.handleChange }
                />
                <Meme data={this.state}/>
            </div>
        )
    }
}

export default MemeGenerator