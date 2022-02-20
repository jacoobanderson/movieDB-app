import React from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap'

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
        navigate(`/${res.id}/overview`)
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <Container className="w-50 p-5">
    <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit" variant="primary">Sign in</Button>
    </Form>
    </Container>
  )
}

export default Login