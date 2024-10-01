import React, { useState } from 'react';
import "../Styles/Input.css"

const Input = () => {
    let [name,setName]=useState("mark");
  return (
    <>
        <form className='inp'>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <button onClick={()=>console.log(name)
            }>press</button>
        </form>
        <p>{name}</p>
    </>
  )
}

export default Input;