import React, {useState} from 'react'

export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const collectData = () => {
    console.warm(name, email, password)
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