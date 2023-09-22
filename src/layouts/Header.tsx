import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-light py-3 px-0 overflow-hidden">
      <div className="container px-md-5">
        <div className="row w-100 g-0 justify-content-between">
          <div className="col-8">
            <div className="d-inline-block"><a className="navbar-brand pt-0 fs-3 text-black d-flex align-items-center" href="index.html">
              <img className="img-fluid" src="../src/assets/img/icons/logo-icon.png" alt="" />
              <span className="fw-bolder ms-2">Foto</span><span className="fw-thin">gency</span></a></div>
          </div>
          <div className="col-4 d-lg-none text-end pe-0">
            <button className="btn p-0 shadow-none text-black fs-2 d-inline-block" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle offcanvas navigation"><span className="menu-bar" /></button>
          </div>

          <div className="offcanvas offcanvas-end px-0" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasTitle" aria-hidden="true">
            <div className="offcanvas-header justify-content-end">
              <h5 className="visually-hidden offcanvas-title" id="navbarOffcanvasTitle">Menu</h5>
              <button className="btn p-0 shadow-none text-black fs-2 d-inline text-end" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><span className="menu-close-bar" /></button>
            </div>

            <div className="offcanvas-body px-0">
              <div className="d-lg-flex flex-center-start gap-3 overflow-hidden">
                <ul className="navbar-nav ms-auto fs-4 ps-6">
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5 active" aria-current="page" href="index.html">Home</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="portfolio.html">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="gallery.html">Gallery</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="exhibitions.html">Exhibitions</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="about.html">About</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="blog.html">Blog</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-4">
            <div className="d-none d-lg-flex justify-content-end position-relative z-index-1">
              <div className="position-absolute absolute-centered z-index--1">
                <h1 className="ms-2 fw-bolder text-outlined text-uppercase text-white pe-none display-1">Home</h1>
              </div>
              <div className="d-flex gap-3 align-items-start"><a className="mb-0 ms-auto text-warning fs-0 fw-bold text-uppercase" href="blog.html#contact">Contact Now</a>
                <ul className="navbar-nav ms-auto fs-4 ps-6">
                  <li className="nav-item">
                    <NavLink className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5"  exact to="/">Home </NavLink>
                  </li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5 active" aria-current="page" href="index.html">Home</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="portfolio.html">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="gallery.html">Gallery</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="exhibitions.html">Exhibitions</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="about.html">About</a></li>
                  <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="blog.html">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
