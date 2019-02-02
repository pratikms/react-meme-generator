import React from 'react'

function MemeComponent(props) {
    return (
        <div className='meme'>
            <img src={props.data.randomImage} alt='' />
            <h2 className='top'>{props.data.topText}</h2>
            <h2 className='bottom'>{props.data.bottomText}</h2>
        </div>
    )
}

export default MemeComponent