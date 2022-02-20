
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const { id } = useParams()
    const [isAuth, setIsAuth] = useState()

    useEffect(() => {
      async function checkAuth() {
        const isAuth = await fetchPrivate()
        setIsAuth(isAuth)
      }
      checkAuth()
    }, [])

    async function fetchPrivate() {
      const response = fetch(`http://localhost:5000/api/user/${id}/overview`, {
          method: 'GET',
          credentials: 'include'
      })
      const res = await response

    if (res.status === 200) {
        return true
    } else {
        return false
    }
    }
  
  if (isAuth === undefined) return null
  return isAuth ? children : <Navigate to="/login" />
}

export default PrivateRoute