'use client'
import React from 'react'

function error({error}:{error:Error}) {
    console.log(error.message);
    
  return (
    <div>Server Side Error Please Try Later</div>
  )
}

export default error