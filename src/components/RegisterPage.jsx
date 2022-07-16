import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const RegisterPage = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail]       = useState('');
    const[password,setPassword] = useState('');
    const[alert, setAlert]      = useState('');
    const[error, setError]      = useState('');

    const changeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
        setError('')
    }

    const changeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError('')
    }

    const changePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        setError('')
    }

    const signupBtn = () => {
        const data = {
            username : username,
            email : email,
            password : password
        }
        axios.post('http://localhost:3001/register', data) 
        .then(result => {
            if(result) {
                if(result.data) {
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setAlert(result.data.message)
                    setTimeout(() => {
                        setAlert('')
                    }, 4000)
                }
            }
        })
        .catch(e => {
            setError(e.response.data.message)
            setTimeout(() => {
                setError('')
            }, 4000)
        })
    }

  return (
    <div>
        <div className='main-form-register'>
        <h2>Welcome ! </h2>
        <p className='user-sctn'>Please fill the form to make an account</p>
        {
            error && (
                <div> 
                <p className='alert alert-danger'>{error}</p>
                </div>   
            )
        }
        {
            alert && (
                <div> 
                <p className='alert alert-primary'>{alert}</p>
                </div>   
            )
        }
        <hr />
       
        <label>Username</label> <br />
        <input className='input-bar' type="text" name="" id="" placeholder='Enter your username' value={username} onChange={changeUsername}/> <br />
        <label>Email</label> <br />
        <input className='input-bar' type="email" name="" id="" placeholder='Enter your email' value={email} onChange={changeEmail}/> <br />
        <label>Password</label> <br />
        <input className='input-bar' type="password" name="" id="" placeholder='Enter your password' value={password} onChange={changePassword}/>
        <br /> 
        <p className='prompt'><input type="checkbox" name="" id="" /> By signing up, you are agree with our <Link to="/terms"><a href="https://google.com">Terms and Services</a></Link></p>
        <button className='btn-register' onClick={signupBtn}>Sign Up</button>
        <p className='register-prompt'>Aleady have an account ?  
        <Link to="/">
        <a href='https://google.com'> Login</a>
        </Link>
        </p>
    </div>
    </div>
  )
}
