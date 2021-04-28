import React, { Component } from 'react' 
import logo from './logo.svg'
import './App.css'
import My from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'

class App extends Component {
  render(){
    return(
    <div className="App">

     {/*<My />*/} 
     {/*<Welcome/> */} 
     <Hello/>   
    </div>
  )
}
}

export default App

 