'use client'
import React, { useState } from 'react'

import Login from '../../../components/Login';

const Page = () => {
    return (
      <div className="container mx-auto">
        
        <Login admin={false}/>
      </div>
    )
}

export default Page