import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const collectData = async () => {
    console.log(name, email, password)
    let result = await fetch("http://localhost:5500/register", {
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type':'application/json'
      }
    })
    result = await result.json()
    console.log(result)
    navigate('/')
  }

  return(
    <div className='register'>
      <h1>Register</h1>
      <input className='inputBox'  type="text" name="" id="" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className='inputBox'  type="text" name="" id="" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input className='inputBox'  type="password" name="" id="" placeholder='Enter passsword' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={collectData} className='appButton' type='button' >Sign Up</button>
    </div>
  )
}