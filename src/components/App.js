
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  let [name,setName]=useState("")

  return (
    <div>
        {/* Do not remove the main div */}
       <h2>Enter your name:</h2>
        <Form updateName={setName}/>
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
