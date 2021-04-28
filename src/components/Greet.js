import React from 'react'
import App from '../App'

// function Greet(){
//     return <h1> Hello Malki </h1>
// }

 const Greet = props => {
    console.log(props)
    return( 
    <div>
    <h1> Hello {props.name}  a.k a. {props.heroName}</h1> 
    {props.children} </div> 
    )
 }

export default Greet