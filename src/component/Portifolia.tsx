import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Footer from "../layouts/Footer";
import SwiperCore from 'swiper';
import { Pagination } from "swiper/modules";

export default function Portifolia() {
  SwiperCore.use([Pagination]);

  useEffect(() => {
    const swiper = new SwiperCore('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000, // Auto transition every 3 seconds (3000 milliseconds)
      },
    });
  
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
        <nav className="navbar navbar-light py-3 px-0 overflow-hidden">
          <div className="container px-md-5">
            <div className="row w-100 g-0 justify-content-between">
              <div className="col-8">
                <div className="d-inline-block"><a className="navbar-brand pt-0 fs-3 text-black d-flex align-items-center" href="index.html"><img className="img-fluid" src="../src/assets/img/icons/logo-icon.png" /><span className="fw-bolder ms-2">Foto</span><span className="fw-thin">gency</span></a></div>
                <div className="mt-4 d-none d-lg-block">
                  <h1 className="text-uppercase fs-lg-7 fs-5 fw-bolder text-300 lh-1 position-relative z-index-0">Portfolio</h1>
                  <h1 className="d-none d-md-block fw-bolder text-outlined fs-7 text-white lh-1 mt-n4 position-relative z-index--1">Selected Works</h1>
                </div>
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
                      <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5" aria-current="page" href="index.html">Home</a></li>
                      <li className="nav-item"><a className="nav-link d-inline-block nav-text-outlined lh-1 text-white fs-5 active" aria-current="page" href="portfolio.html">Portfolio</a></li>
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
                    <h1 className="ms-2 fw-bolder text-outlined text-uppercase text-white pe-none display-1">Portfolio</h1>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <a className="mb-0 ms-auto text-warning fs-0 fw-bold text-uppercase" href="blog.html#contact">
                      Contact Now
                    </a>
                    <ul className="navbar-nav navbar-fotogency ms-auto text-end">
                      <li className="nav-item px-2 position-relative">
                        <Link className="nav-link pt-0" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item px-2 position-relative">
                        <Link className="nav-link pt-0 active" to="/portfolio">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item px-2 position-relative">
                        <Link className="nav-link pt-0" to="/gallery">
                          Gallery
                        </Link>
                      </li>
                      <li className="nav-item px-2 position-relative">
                        <Link className="nav-link pt-0" to="/exhibitions">
                          Exhibitions
                        </Link>
                      </li>
                      <li className="nav-item px-2 position-relative">
                        <Link className="nav-link pt-0" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item px-2 position-relative">
                        <Link className="nav-link pt-0" to="/blog">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0 mt-4 d-lg-none">
              <h1 className="text-uppercase ps-0 fs-lg-7 fs-5 fw-bolder text-300 lh-1 position-relative z-index-0">Portfolio</h1>
              <h1 className="fw-bolder text-outlined ps-0 fs-lg-7 fs-sm-6 fs-5 text-white lh-1 mt-sm-n4 mt-n3 position-relative z-index--1">Selected Works</h1>
            </div>
          </div>
        </nav>
        <section className="py-3">
          <div className="container-fluid px-0">
            <div className="position-absolute w-100 border-dashed-bottom opacity-25 top-5 z-index-1" />
            <div className="container px-md-5">




              <div className="row g-0">
                <div className="col-lg-12 pb-6 px-0 mb-lg-0">
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper='{"slidesPerView":1,"spaceBetween":30,"pagination":{"el":".swiper-pagination","clickable":true},"loop":true}'
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="row align-items-center">
                          <div className="col-xl-7">
                            <div className="position-relative">
                              <div className="position-absolute start-0 bottom-0 ms-3">
                                <h3 className="text-white">Mogadisu Somalia</h3>
                                <p className="text-300">Shooting and Advertisement Campaign</p>
                              </div>
                              <img className="portfolio-img img-fluid" src="../src/assets/img/portfolio/img01.png" alt="Slide 1" />
                            </div>
                          </div>
                          <div className="col-xl-4 mt-4">
                            <p className="fs-0">
                              I a genre of Japanese art that became popular in the 17th century through to the 19th century.
                              The word roughly translates as “pictures of the floating world” and artists belonging to the
                              movement produced woodblock prints and paintings of scenes from history and folktales, sumo
                              wrestlers, landscapes of flora and fauna, and a touch of erotica.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="row align-items-center">
                          <div className="col-xl-7">
                            <div className="position-relative">
                              <div className="position-absolute start-0 bottom-0 ms-3">
                                <h3 className="text-white">Mogadisu Somalia</h3>
                                <p className="text-300">Shooting and Advertisement Campaign</p>
                              </div>
                              <img className="portfolio-img img-fluid" src="../src/assets/img/portfolio/img02.png" alt="Slide 2" />
                            </div>
                          </div>
                          <div className="col-xl-4 mt-4">
                            <p className="fs-0">
                              I a genre of Japanese art that became popular in the 17th century through to the 19th century.
                              The word roughly translates as “pictures of the floating world” and artists belonging to the
                              movement produced woodblock prints and paintings of scenes from history and folktales, sumo
                              wrestlers, landscapes of flora and fauna, and a touch of erotica.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="row align-items-center">
                          <div className="col-xl-7">
                            <div className="position-relative">
                              <div className="position-absolute start-0 bottom-0 ms-3">
                                <h3 className="text-white">Mogadisu Somalia</h3>
                                <p className="text-300">Shooting and Advertisement Campaign</p>
                              </div>
                              <img className="portfolio-img img-fluid" src="../src/assets/img/portfolio/img03.png" alt="Slide 3" />
                            </div>
                          </div>
                          <div className="col-xl-4 mt-4">
                            <p className="fs-0">
                              I a genre of Japanese art that became popular in the 17th century through to the 19th century.
                              The word roughly translates as “pictures of the floating world” and artists belonging to the
                              movement produced woodblock prints and paintings of scenes from history and folktales, sumo
                              wrestlers, landscapes of flora and fauna, and a touch of erotica.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-theme swiper-pagination d-flex mt-4" />
                </div>
              </div>
            </div>
          </div>
          {/* end of .container*/}
        </section>
      </main>


      <Footer />




    </div>
  )
}
