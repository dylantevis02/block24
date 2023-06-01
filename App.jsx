import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'

function App() {

    const [puppies, setPuppies] = useState(puppyList);

    const [featPupId, setFeatPupID] = useState(null)

    console.log("puppyList: ", puppyList);


//element.addEventListener("click", handleClick)
function handleClick(){
  element.addEventListener("click", handleClick)
}

    return (

      <div className="App">
        {
          puppies.map((puppy) => {
               return (
               <p onClick = {handleClick} key = {puppy.id} > {puppy.name} </p>)
               
             })
         }
      </div>
    );
}





export default App
