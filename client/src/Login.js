import React from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const submitHandler = async (event) => {
    event.preventDefault()
    try {
        const response = await fetch('http://localhost:5000/api/account/login', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': `${event.target.username.value}`,
                'password': `${event.target.password.value}`
            })
        })
        const res = await response.json()
        console.log(event.target.username.value)
        console.log(response.id)
        console.log(response.body)
        navigate(`/${res.id}/overview`)
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
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit">Log in</button>
    </form>
  )
}

export default Login