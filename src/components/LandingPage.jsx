import React from 'react'
import '../LandingPage.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div>
        {/* Navbar */}
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand mx-3" href="#"> <img className='logo-nav' src="../img/edge-logo-transparent.png" alt="" /> </a>
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
            <h1 className='greeting'>Welcome to <br /> <img className='logo-greeting' src="../img/edge-logo-transparent-gray.png" alt="" /> </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vel minus? Delectus provident nemo obcaecati dolore iusto, alias non qui.</p>
        </div>
        <div className="right-side">
            <div className="right-side-content">
            <p>Sign up now to get <b className='text-success'>20% discount !</b>  Only for new user ! </p>
            <Link to="/signup">
            <button className="learn-more" type="submit">Sign Up</button>
            </Link>
            </div>
        </div>
    </div>

    {/* About */}
    <div className="about" id='about'>
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

    {/* Pricing*/}
    <div className="pricing">
      <h1>Pricing</h1>
      <br />
      <div className="price-wrapper">
        <div className="prices">
          <h3> Edge <b className='text-success'>Personal</b> </h3>
          <p>For single personal user</p>
          <hr />
          <h1>2.99$/month</h1>
          <hr />
          <div className="services">
            <p>Include : </p>
            <ul>
              <li>Free .xyz domain</li>
              <li>2-Core CPU (2GHz)</li>
              <li>2 GB RAM</li>
              <li>2GB Storage (SSD)</li>
              <li>Anti DDoS protection</li>
              <li>24/7 customer service</li>
            </ul>
          </div>
          <hr />
          <Link to="/signup">
            <button className="learn-more" type="submit">Add to cart</button>
          </Link>
        </div>

        <div className="prices">
          <h3> Edge <b className='text-success'>Personal+</b> </h3>
          <p>For personal professional user</p>
          <hr />
          <h1>4.99$/month</h1>
          <hr />
          <div className="services">
            <p>Include : </p>
            <ul>
              <li>Free 2 .xyz/.com domain</li>
              <li>2 custom domain</li>
              <li>4-Core CPU (2.5GHz)</li>
              <li>4 GB RAM</li>
              <li>4GB Storage (SSD)</li>
              <li>Anti DDoS protection</li>
              <li>24/7 customer service</li>
            </ul>
          </div>
          <hr />
          <Link to="/signup">
            <button className="learn-more" type="submit">Add to cart</button>
          </Link>
        </div>

        <div className="prices">
          <h3> Edge <b className='text-danger'>Pro+</b> </h3>
          <p>For professional developers</p>
          <hr />
          <h1>7.99$/month</h1>
          <hr />
          <div className="services">
            <p>Include : </p>
            <ul>
              <li>Free 5 .xyz/.com domain</li>
              <li>Unlimited custom domain</li>
              <li>8-Core CPU (3.0GHz)</li>
              <li>8 GB RAM</li>
              <li>16GB Storage (SSD)</li>
              <li>Anti DDoS+ protection</li>
              <li>24/7 customer service</li>
            </ul>
          </div>
          <hr />
          <Link to="/signup">
            <button className="learn-more" type="submit">Add to cart</button>
          </Link>
        </div>

      </div>

      <br />
      <br />

      <div className="price-wrapper">

        <div className="prices">
            <h3> Edge <b className='text-primary'>Enterprise</b> </h3>
            <p>For small companies/startup</p>
            <hr />
            <h1>127.99$/month</h1>
            <hr />
            <div className="services">
              <p>Include : </p>
              <ul>
                <li>Free 25 .xyz/.com domain</li>
                <li>Unlimited custom domain</li>
                <li>16-Core CPU (4.0GHz)</li>
                <li>16 GB RAM</li>
                <li>500GB Storage (SSD)</li>
                <li>Anti DDoS+ protection</li>
                <li>24/7 customer service</li>
              </ul>
            </div>
            <hr />
            <Link to="/signup">
              <button className="learn-more" type="submit">Add to cart</button>
            </Link>
          </div>

          <div className="prices">
            <h3> Edge <b className='text-primary'>Enterprise+</b> </h3>
            <p>For big companies/startup</p>
            <hr />
            <h1>531.99$/month</h1>
            <hr />
            <div className="services">
              <p>Include : </p>
              <ul>
                <li>Free 100+ .xyz/.com domain</li>
                <li>Unlimited custom domain</li>
                <li>32-Core CPU (6.0GHz)</li>
                <li>64 GB RAM</li>
                <li>1TB Storage (SSD)</li>
                <li>Anti DDoS+ protection</li>
                <li>24/7 customer service</li>
              </ul>
            </div>
            <hr />
            <Link to="/signup">
              <button className="learn-more" type="submit">Add to cart</button>
            </Link>
          </div>

          <div className="prices">
            <h3> Edge <b className='text-info'>Student+</b> </h3>
            <p>For students</p>
            <hr />
            <h1>1$/month</h1>
            <hr />
            <div className="services">
              <p>Include : </p>
              <ul>
                <li>Free 1 .xyz/.com domain</li>
                <li>1 custom domain</li>
                <li>4-Core CPU (2.0GHz)</li>
                <li>4 GB RAM</li>
                <li>4GB Storage (SSD)</li>
                <li>Anti DDoS+ protection</li>
                <li>24/7 customer service</li>
              </ul>
            </div>
            <hr />
            <Link to="/signup">
              <button className="learn-more" type="submit">Add to cart</button>
            </Link>
          </div>

      </div>

    </div>

    <br />

    {/* Teams*/}
    <div className="teams">
      <h1>Our Teams</h1>
      <br />
      <div className="teams-wrapper">
        <div className="teams-items">
          <img src="../img/man.png" alt="" />
          <p>John Doe</p>
          <p className='text-muted'>CEO</p>
        </div>
        <div className="teams-items">
          <img src="../img/woman.png" alt="" />
          <p>Jane Doe</p>
          <p className='text-muted'>Front-end Developer</p>
        </div>
        <div className="teams-items">
          <img src="../img/man (1).png" alt="" />
          <p>Jhon Doe</p>
          <p className='text-muted'>Back-end Developer</p>
        </div>
      </div>
    </div>
    </div>
  )
}
