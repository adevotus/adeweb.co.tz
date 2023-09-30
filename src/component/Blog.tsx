import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import '../assets/css/loader.css'

function Blog() {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const cursorInit = () => {
            const cursor = document.querySelector('.cursor-outer') as HTMLElement | null;
            const targets = document.querySelectorAll<HTMLElement>('a, .btn, [type="button"], input, textarea');
    
            if (cursor) {
                document.addEventListener('mousemove', (e) => {
                    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
                });
            }
    
            targets.forEach((item) => {
                item.addEventListener('mouseover', () => {
                    if (cursor) {
                        cursor.classList.add('link-hover');
                    }
                });
    
                item.addEventListener('mouseleave', () => {
                    if (cursor) {
                        cursor.classList.remove('link-hover');
                    }
                });
            });
        };
        cursorInit();
        
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
        }, 3000);
    
        // Cleanup function to clear the timer
        return () => {
            clearTimeout(loaderTimeout);
        };
    
        // Call the cursorInit function
      
    }, []);
    
    return (
        <div>
            <main className="main" id="top">
                <div className="cursor-outer d-none d-md-block" />
                <Header />
                <section className="py-2">
                    <div className="container px-md-5">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="card border-0 mb-3">
                                    {showLoader ? (
                                        <div className="loader"></div>
                                    ) : (
                                        <img className="card-img-top" src="../src/assets/img/blogs/img1.png" alt="Blog" />
                                    )}
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center"> <span className="fa-solid fa-circle-dot text-warning" />
                                            <p className="text-300 m-0 ps-1">6min read</p>
                                        </div>
                                        <div className="bg-warning p-2 text-center opacity-50">
                                            <p className="text-white mb-0">color and light</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="mb-3">Simply dummy text of the printing and typesetting.</h5>
                                        <p className="text-200 m-0 mb-3">By - <span className="text-300 fw-bold">Frederico giuspam</span></p>
                                        <p className="mb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                                        <button className="btn btn-link text-warning p-0"><span className="fw-medium">Read full article</span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="card border-0 mb-3">
                                {showLoader ? (
                                        <div className="loader"></div>
                                    ) : (
                                        <img className="card-img-top" src="../src/assets/img/blogs/img2.png" alt="Blog" />
                                    )}
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center"> <span className="fa-solid fa-circle-dot text-warning" />
                                            <p className="text-300 m-0 ps-1">6min read</p>
                                        </div>
                                        <div className="bg-warning p-2 text-center opacity-50">
                                            <p className="text-white mb-0">color and light</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="mb-3">Simply dummy text of the printing and typesetting.</h5>
                                        <p className="text-200 m-0 mb-3">By - <span className="text-300 fw-bold">Frederico giuspam</span></p>
                                        <p className="mb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                                        <button className="btn btn-link text-warning p-0"><span className="fw-medium">Read full article</span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="card border-0 mb-3">
                                {showLoader ? (
                                        <div className="loader"></div>
                                    ) : (
                                        <img className="card-img-top" src="../src/assets/img/blogs/img3.png" alt="Blog" />
                                    )}
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center"> <span className="fa-solid fa-circle-dot text-warning" />
                                            <p className="text-300 m-0 ps-1">6min read</p>
                                        </div>
                                        <div className="bg-warning p-2 text-center opacity-50">
                                            <p className="text-white mb-0">color and light</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="mb-3">Simply dummy text of the printing and typesetting.</h5>
                                        <p className="text-200 m-0 mb-3">By - <span className="text-300 fw-bold">Frederico giuspam</span></p>
                                        <p className="mb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                                        <button className="btn btn-link text-warning p-0"><span className="fw-medium">Read full article</span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <button className="btn btn-link d-inline-block text-warning p-0 fs-1"><span className="fw-bold">See all</span></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-4" id="contact">
                    <div className="container px-md-5">
                        <div className="row align-items-center">
                            <div className="my-4 text-center">
                                <h1 className="text-uppercase fs-lg-8 fs-6 fw-bolder text-300 lh-1 position-relative z-index-0">Contact</h1>
                                <h1 className="fw-bolder text-outlined fs-7 text-white lh-1 mt-n4 position-relative z-index--1">Get in Touch</h1>
                                <form className="my-5 px-3">
                                    <div className="row g-3 g-md-5">
                                        <div className="col-md-6">
                                            <div className="card border-0">
                                                <div className="form-floating mb-3">
                                                    <input className="form-control form-fotogency-header-control" id="floatingEmail" type="email" placeholder="name@example.com" />
                                                    <label htmlFor="floatingEmail">Email</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control form-fotogency-header-control" id="floatingName" type="text" placeholder="name" />
                                                    <label htmlFor="floatingName">Your name</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control form-fotogency-header-control" id="floatingPhone" type="tel" placeholder="name@example.com" />
                                                    <label htmlFor="floatingPhone">Phone number</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control form-fotogency-header-control" id="floatingLocation" type="text" placeholder="Desired Location" />
                                                    <label htmlFor="floatingLocation">Desired location</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control form-fotogency-header-control text-400" id="floatingDate" type="text" placeholder="Desired Date" />
                                                    <label htmlFor="floatingDate">Desired Date</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card border-0">
                                                <input className="form-control opacity-0 pb-0 pe-none d-none d-md-block" />
                                                <div className="form-floating mb-3">
                                                    <textarea className="form-control form-fotogency-header-control border ps-2 form-fotogency-header-control" id="floatingTextarea" style={{ height: 210 }} placeholder="Leave a comment here" defaultValue={""} />
                                                    <label className="ps-2" htmlFor="floatingTextarea">Message</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control form-fotogency-header-control" id="floatingSource" type="text" placeholder="How did you hear about us?" />
                                                    <label htmlFor="floatingSource">How did you hear about us?</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 text-end mt-3">
                                            <button className="btn btn-link text-warning p-0" type="submit"><span className="fw-bolder text-uppercase">Submit</span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Blog
