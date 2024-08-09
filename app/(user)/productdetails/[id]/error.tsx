'use client'
import React from 'react'

function error({error}:{error:Error}) {
    console.log(error.message);
    
  return (
    <div>error</div>
  )
}

export default error