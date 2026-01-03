"use client"
import React, { useState } from 'react'

const Parent = () => {
    const [profileData,setProfileData]=useState({
        name:"",
        email:"",
        age:""
    })

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setProfileData(()=>({...profileData,[name]:value}))
    }
  return (
    <div>
       <input name='name' type="text" className='border' value={profileData.name} onChange={handleChange}/>
       <input name='email' type="text" className='border' value={profileData.email} onChange={handleChange}/>
       <input name='age' type="number" className='border' value={profileData.age} onChange={handleChange}/>
    </div>
  )
}

export default Parent
