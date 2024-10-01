import React from 'react'

const Topic = () => {
    const a=new Promise((resolve,reject)=>{
        resolve("promise fulfilled");
    });
    a.then((params)=>{
        console.log(params, "aaa");
        
    })
  return (
    <>

    </>
  )
}

export default Topic;