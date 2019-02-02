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
                />
                <input 
                    type='text'
                    name='bottomText'
                    value={ props.data.bottomText }
                    placeholder='Bottom Text'
                />
                <button>Generate!</button>
            </form>
        </div>
    )
}

export default FormComponent