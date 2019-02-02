import React from 'react'

function FormComponent(props) {
    return (
        <div>
            <form className='meme-form'>
                <input 
                    type='text'
                    name='topText'
                    value={ props.data.topText }
                    placeholder='Top Text'
                    onChange={ props.handleChange }
                />
                <input 
                    type='text'
                    name='bottomText'
                    value={ props.data.bottomText }
                    placeholder='Bottom Text'
                    onChange={ props.handleChange }
                />
                <button>Generate!</button>
            </form>
        </div>
    )
}

export default FormComponent