import React from 'react'

const Topic = () => {
    const a=new Promise((resolve,reject)=>{
        resolve("promise fulfilled");
        reject("some technical error")
    });
    // a.then((params)=>{
    //     console.log(params, "aaa");
        
    // },(error)=>{
    //     console.log(error);
        
    // })
    a.then((params)=>{
        console.log(params, "aaa");
        
    }).catch((error)=>{
        console.log(error);
        
    })
  return (
    <>

    </>
  )
}

export default Topic;