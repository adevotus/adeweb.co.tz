import React, { useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

function About() {
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
      }, []);
    return (
        <div>

            <main className="main" id="top">
                <div className="cursor-outer d-none d-md-block" />
              <Header/>
                <section className="py-2">
                    <div className="container px-md-5">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                        <div className="card border-0 mb-3"><img className="card-img-top" src="../src/assets/img/team/img1.png" />
                                            <div className="row g-0 card-body px-0 pt-2">
                                                <div className="col-12 col-xl-8 text-center text-xl-start">
                                                    <h4>Michael Lurie</h4>
                                                    <p className="text-warning mb-2">CEO</p>
                                                </div>
                                                <div className="col-12 col-xl-4 justify-content-center fs-2 d-flex gap-1"><a href="#!"><span className="team-social-icon fab fa-linkedin ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-facebook ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-instagram ml-3" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                        <div className="card border-0 mb-3"><img className="card-img-top" src="../src/assets/img/team/img2.png" />
                                            <div className="row g-0 card-body px-0 pt-2">
                                                <div className="col-12 col-xl-8 text-center text-xl-start">
                                                    <h4>Jessica Wanda</h4>
                                                    <p className="text-warning mb-2">Art Director</p>
                                                </div>
                                                <div className="col-12 col-xl-4 justify-content-center fs-2 d-flex gap-1"><a href="#!"><span className="team-social-icon fab fa-linkedin ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-facebook ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-instagram ml-3" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                        <div className="card border-0 mb-3"><img className="card-img-top" src="../src/assets/img/team/img3.png" />
                                            <div className="row g-0 card-body px-0 pt-2">
                                                <div className="col-12 col-xl-8 text-center text-xl-start">
                                                    <h4>Roland Keith</h4>
                                                    <p className="text-warning mb-2">Cinematographer</p>
                                                </div>
                                                <div className="col-12 col-xl-4 justify-content-center fs-2 d-flex gap-1"><a href="#!"><span className="team-social-icon fab fa-linkedin ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-facebook ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-instagram ml-3" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                        <div className="card border-0 mb-3"><img className="card-img-top" src="../src/assets/img/team/img4.png" />
                                            <div className="row g-0 card-body px-0 pt-2">
                                                <div className="col-12 col-xl-8 text-center text-xl-start">
                                                    <h4>Diane Givens</h4>
                                                    <p className="text-warning mb-2">Art Director</p>
                                                </div>
                                                <div className="col-12 col-xl-4 justify-content-center fs-2 d-flex gap-1"><a href="#!"><span className="team-social-icon fab fa-linkedin ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-facebook ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-instagram ml-3" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                        <div className="card border-0 mb-3"><img className="card-img-top" src="../src/assets/img/team/img5.png" />
                                            <div className="row g-0 card-body px-0 pt-2">
                                                <div className="col-12 col-xl-8 text-center text-xl-start">
                                                    <h4>John Brown</h4>
                                                    <p className="text-warning mb-2">CEO</p>
                                                </div>
                                                <div className="col-12 col-xl-4 justify-content-center fs-2 d-flex gap-1"><a href="#!"><span className="team-social-icon fab fa-linkedin ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-facebook ml-3" /></a><a href="#!"><span className="team-social-icon fab fa-instagram ml-3" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>




            <div>

                <Footer />

            </div>


        </div>
    )
}

export default About