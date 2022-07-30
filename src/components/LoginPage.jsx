import React, { useState, Fragment} from 'react'
import '../App.css'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

export const LoginPage = () => {
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[navigate,setNavigate] = useState(false);
  const[error,setError]       = useState('');

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError('')
  }

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError('')
  }

  const loginBtn = () => {
    const data = {
      username : username,
      password : password
    }

    axios.post('http://localhost:3001/login', data)
    .then(result => {
      if(result) {
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('username', data.username, JSON.stringify(data.username))
        setNavigate(true)
        
      }
    })
    .catch(e => {
      setError(e.response.data.message)
    })
  }
  
  
  return ( 
    <Fragment>
      {
        navigate && (
          <Navigate to="/dashboard" />
        )
      }
        <div className="wrapper">
            <div className='main-form'>
                <h2>Welcome back ! </h2>
                {
                  error && (
                  <div> 
                    <p className='alert alert-danger'>{error}</p>
                  </div>
                  )
                }
                <hr />
                <label>Username</label> <br />
                <input className='input-bar' type="text" placeholder='Enter your username' value={username} onChange={onChangeUsername}/> <br />
                <label>Password</label> <br />
                <input className='input-bar' type="password" placeholder='Enter your password' value={password} onChange={onChangePassword}/>
                <p className='prompt'><input type="checkbox" /> Remember me</p>
                <button className='btn-login' onClick={loginBtn}>Login</button>
                <p className='register-prompt'>Don't have an account ? 
                <Link to="/signup">
                <a href='https://google.com'> Create an account</a>
                </Link> <br />
                <Link to="/">
                <a href='https://google.com'> Cancel</a>
                </Link>
                </p>
            </div>
        </div>
    </Fragment>
  )
}
