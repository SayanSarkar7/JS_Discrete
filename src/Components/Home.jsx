import React, { useEffect, useState } from 'react'

const Home = () => {
    const [a,setA]=useState(0);
    const increment=()=>{
        setA(a+1);
        console.log(a);
    }
    const decrement=()=>{
        setA(a-1);
        console.log(a);
    }
    useEffect(()=>{
        console.log("Showing Effect");
    },[a])
  return (
    <div>
        <button onClick={increment}>Add</button>
        <p>{a}</p>
        <button onClick={decrement}>Minus</button>
        {/* <p>{a=a-1}</p> */}
    </div>
  )
}

export default Home