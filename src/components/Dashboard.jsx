import React from 'react'
import '../App.css'
import { Navigate, Link } from 'react-router-dom'

export const Dashboard = () => {

  const token = localStorage.getItem('token')

  if(!token) {
    return <Navigate to="/" />
  }

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
        <div className="main-form">
            <h1>Hello ! </h1>
            <hr />
            <p>
              <p>{date}</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at ducimus modi. Sed veritatis nisi a libero reiciendis ullam? Maiores!.</p>
            <hr />
            <p className='alert alert-danger'>Still in development, ehe~</p>
            <p className='alert alert-success'>See our <Link to="/terms">
            <a href='https://google.com'> Terms and Service</a>
            </Link></p>
            <hr />
            <Link to="/">
            <a href='https://google.com'> Logout </a>
            </Link>
        </div>
    </div>
  )
}
