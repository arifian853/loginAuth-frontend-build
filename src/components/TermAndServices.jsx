import React from 'react'
import { Link } from 'react-router-dom'

export const TermAndServices = () => {
  return (
    <div>
        <div className="main-form">
            <h4>Ehe...</h4>
            <hr />
            <p>Actually, there's nothing here. Ehe~</p>
            <img className='ehe' src="img/ehe.png" alt="" /> 
            <br /> <br />
            <p className='register-prompt'>  
            <Link to="/login">
            <a href='https://google.com'> Back to Login</a>
            </Link>
            </p>
        </div>
    </div>
  )
}
