import React from 'react'
import '../LandingPage.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div>
        {/* Navbar */}
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand mx-3" href="#">Welcome !</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="#">Teams</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Twitter</a></li>
            <li><a class="dropdown-item" href="#">Instagram</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">GitHub</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex">
        <Link to="/login">
        <button className="button-login" type="submit">Login</button>
        </Link>
       
      </div>
    </div>
  </div>
</nav>

    {/* Landing Page */}
    <div className="landing-wrapper">
        <div className="left-side">
            <h1 className='greeting'>Welcome to our web !</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vel minus? Delectus provident nemo obcaecati dolore iusto, alias non qui.</p>
        </div>
        <div className="right-side">
            <div className="right-side-content">
            <p>Want to discover more ? </p>
            <Link to="/signup">
            <button className="learn-more" type="submit">Learn more</button>
            </Link>
            </div>
        </div>
    </div>

    {/* About */}
    <div className="about">
        <h1>About Us</h1> <br />
        <div className="about-wrapper">
            <div className="about-left-side">
                <h2>We are Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet voluptatibus veritatis neque voluptatum aliquam aspernatur assumenda vero ratione sed?</p>
            </div>
            <div className="about-right-side">
                <h2>Find us on</h2>
                <a href="https://instagram.com"><img className="logo-social" src="img/instagram.png" alt="" /></a>
                <a href="https://twitter.com"><img className="logo-social" src="img/twitter.png" alt="" /></a>
                <a href="https://github.com"><img className="logo-social" src="img/github.png" alt="" /></a>
            </div>
        </div>
    </div>
    </div>
  )
}
