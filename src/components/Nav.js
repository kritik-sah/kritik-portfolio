import React from 'react'
// import Logo from '../img/itrebels.png';

const Nav = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="top">

  <div className="container">
    <a className="navbar-brand" href="/">
      {/* <img src={Logo} alt="" width="30" height="30" />*/}<span>🟢READY FOR WORK</span> 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#about">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#CERTIFICATIONS">CERTIFICATIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">TESTIMONIALS</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-outline-danger" href="https://github.com/kritik-sah/resume/raw/main/2022/Kritik%20Resume.pdf" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
          </svg>
          &nbsp;CV/Resume</a>
        </li>
      </ul>
    </div>
    </div>

</nav>
    )
}

export default Nav
