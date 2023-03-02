import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()

  const logout = () => {
    // localStorage.clear() // => esse remove tudo
    localStorage.removeItem('user')
    navigate('/signup')
  }

  return (
    <div>
      <img
      className="logo"
       src="https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg"
       alt="logo-lion"
        />
      {
        auth ?
      <ul className="nav-ul">
        <li> <Link to="/">Products</Link></li>
        <li> <Link to="/add">Add Products</Link></li>
        <li> <Link to="/update">Update Products</Link></li>
        <li> <Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
        :
      <ul className="nav-ul nav-right">
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
        }
    </div>
  )
}
