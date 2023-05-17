import React, {useState} from "react";



const Form=({updateName})=>{


    return (
        <div>
             
            <form>
            
                <input type="text"
                name="name"
                onChange={(e)=>updateName(e.target.value)}/>
            </form>
        </div>
    )
}

export default Form;