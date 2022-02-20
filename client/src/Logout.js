import React from 'react'

const Logout = () => {
  
  function logoutFetch() {
      fetch('http://localhost:5000/api/account/logout', {
          method: 'GET',
          credentials: 'include'
      }) 
  }
  logoutFetch()
  return (
    <div>Logout</div>
  )
}

export default Logout