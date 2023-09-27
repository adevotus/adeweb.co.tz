import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-footer-black" id="footer">
                <div className="container py-7 px-md-5">
                    <div className="row g-0">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <div className="mb-4 d-inline-block"><a className="navbar-brand pt-0 fs-3 text-white d-flex align-items-center" href="index.html"><img className="img-fluid" src="../src/assets/img/icons/dark-logo-icon.png" width={25} height={25} /><span className="fw-bolder ms-2">Foto</span><span className="fw-thin">gency</span></a></div>
                            <div className="col-12 col-md-10 text-300 mb-3"><i className="fas fa-map-marker-alt" /><a className="nav-link text-300 d-inline" href="https://www.google.com/maps/place/2109+WS+09+Oxford+Rd+%23127+ParkVilla+Hills,+">2109 WS 09 Oxford Rd #127 ParkVilla Hills, MI 48334</a></div>
                            <div className="col-12 col-md-10 text-300 mb-3"><i className="fas fa-phone" /><a className="nav-link text-300 d-inline" href="tel:+8801976476893">+88 019 76456893</a></div>
                            <div className="col-12 col-md-10 text-300 mb-3"><i className="fas fa-envelope" /><a className="nav-link text-300 d-inline" href="mailto:scrscrumbledegg@gmail.com">scrumbledegg@gmail.com</a></div>
                        </div>
                        <div className="col-md-6">
                            <h5 className="text-white mb-2">SUBSCRIBE TO OUR NEWSLETTER</h5>
                            <form>
                                <div className="form-floating mb-5 position-relative text-200">
                                    <input className="form-control form-fotogency-header-control text-200" id="email" type="email" placeholder="name@example.com" />
                                    <label className="text-300 mb-1" htmlFor="email">Email</label>
                                    <div className="position-absolute end-0 top-0">
                                        <button className="btn shadow-none px-0" type="submit"><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex gap-2 flex-wrap justify-content-between align-items-center"><a className="social-icons" href="https://www.facebook.com/" target="_blank">Facebook</a><a className="social-icons" href="https://www.flickr.com/photos/" target="_blank">Flickr</a><a className="social-icons" href="https://twitter.com/" target="_blank">Twitter</a><a className="social-icons" href="https://www.instagram.com/" target="_blank">Instagram</a><a className="social-icons" href="https://www.youtube.com/" target="_blank">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>




            <section className="bg-black py-0">
                <div className="container px-md-5">
                    <div className="row g-0 justify-content-md-between justify-content-evenly py-4">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                            <p className="fs--1 my-2 fw-light text-100">All rights Reserved © Your Company, 2022</p>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6">
                            <p className="fs--1 fw-light my-2 text-center text-md-end text-100"> Made with&nbsp;
                                <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="#F95C19" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                </svg>&nbsp;by&nbsp;<a className="fw-bold text-warning" href="https://themewagon.com/" target="_blank">ThemeWagon</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer