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
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(event) {
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randomImage = this.state.allMemeImages[randomIndex].url
        this.setState({ randomImage: randomImage })
    }

    render() {
        return (
            <div>
                <Form 
                    data={ this.state }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
                <Meme data={this.state}/>
            </div>
        )
    }
}

export default MemeGenerator