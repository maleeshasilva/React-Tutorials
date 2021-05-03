import React from 'react'

function Namelist(props) {  
  const Persons =[
      {
          id:1,
          name:'Bruce',
          age:30,
          skill:'react'
      },
      {
        id:2,
        name:'clark',
        age:32,
        skill:'Vue'
      },
      {
        id:3,
        name:'diana',
        age:28,
        skill:'js'
      }
  ]




  const Personlist = Persons.map(person => <h2>i am {person.name} I am{person.age} years old.I know {person.skill}</h2>)
 
    return (  
      <div>  
        { Personlist}

      </div>  
    );  
  }

  export default Namelist