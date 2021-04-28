import React, { Component } from 'react' 

const Hello=()=>{
    // return(
    //     <div className='dummyClass' >
    //         <h1>Hello Maleesha</h1>
    //     </div>
    // )
    return React.createElement('div',
    {id:'hello', className:'dummyClass'} ,
    React.createElement('h1',null,'Hello Maleesha!'))
}
export default Hello