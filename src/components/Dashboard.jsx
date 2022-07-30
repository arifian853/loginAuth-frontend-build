import React from 'react'
import '../App.css'
import { Navigate, Link } from 'react-router-dom'

export const Dashboard = () => {

  const username = (localStorage.getItem('username'))

  const token = localStorage.getItem('token')

  if(!token) {
    return <Navigate to="/login" />
  }

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
        <div className="dashboard">
            <h1>Hello ! {username} </h1>
            <p>{date}</p>
            <hr />
              <p>Have a nice day ! {username}</p>
            <hr />
            <p className='alert'>Current plan : <span className='plans'>Edge <b className='text-success'>Personal +</b></span></p>
            
            <hr />
            <Link to="/">
            <button className='btn-register'>Logout</button>
            </Link>
            <br />
            <Link to="/terms">
            <a href='https://google.com'> Terms and Service</a>
            </Link>
        </div>
    </div>
  )
}
