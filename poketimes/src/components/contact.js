import React from 'react'

const Contact=(props)=>{
    setTimeout( ()=>{
        props.history.push('/about')
    },2000)
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eos nesciunt perspiciatis assumenda. At error magnam recusandae suscipit porro voluptates? Nisi distinctio sequi omnis illo eos minima quis, ipsum laboriosam.</p>
        </div>
    )
}

export default Contact