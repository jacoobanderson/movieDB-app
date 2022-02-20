import React from 'react'
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate()
  const submitHandler = async (event) => {
    event.preventDefault()
    try {
        const response = await fetch('http://localhost:5000/api/account/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': `${event.target.username.value}`,
                'email': `${event.target.email.value}`,
                'password': `${event.target.password.value}`
            })
        })
        await response.json()
        navigate(`/login`)
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <form onSubmit={submitHandler}>
        <div>
          <label>
            Username
            <input name="username" type="username" placeholder="username" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit">Register</button>
    </form>
  )
}

export default Register