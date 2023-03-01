import React, {useState} from 'react'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin =() => {
    console.log(email, password);
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input className='inputBox' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input className='inputBox' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleLogin} className='appButton' type='button' >Login</button>

    </div>
  )
}
