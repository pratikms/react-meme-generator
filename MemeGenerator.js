import React, {Component} from 'react'

import Form from './FormContainer'

class MemeGenerator extends Component {

    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'https://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({ allMemeImages: memes })
            })
    }

    render() {
        return (
            <div>
                <Form />
            </div>
        )
    }
}

export default MemeGenerator