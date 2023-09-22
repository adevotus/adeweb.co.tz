// import { useState } from 'react'
import '../assets/css/scroll.css'
import React, { useEffect } from 'react';
import Header from '../layouts/Header';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger'

export default function  Home() {
     // console.clear();

  // let isTweening = false;
  // let currentSection = 0;
  // let amount = 0;
  // let base = 0;
  // const columns = gsap.utils.toArray(".column") as HTMLElement[];

  // columns.forEach((col, i) => {
  //   const els = gsap.utils.toArray(".element", col);
  //   amount = els.length;
  //   base = 100 * (amount - 1);
  //   if (i > 0) {
  //     gsap.set(col, {
  //       yPercent: -base
  //     });
  //   }
  // });

  // const goToSection = (trigger: ScrollTrigger) => {
  //   console.log(trigger.direction, isTweening);
  //   if (isTweening) return;
  //   let value = 0;
  //   if (trigger.direction === 1 && currentSection < amount - 1) {
  //     isTweening = true;
  //     currentSection++;
  //     value = 100 * currentSection;
  //     gsap.to(columns, {
  //       yPercent: (i) => (i < 1 ? -value : value - base),
  //       duration: 1,
  //       onComplete: () => {
  //         isTweening = false;
  //       },
  //     });
  //   } else if (trigger.direction === -1 && currentSection > 0) {
  //     isTweening = true;
  //     currentSection--;
  //     value = 100 * currentSection;
  //     gsap.to(columns, {
  //       yPercent: (i) => (i < 1 ? -value : value - base),
  //       duration: 1,
  //       onComplete: () => {
  //         isTweening = false;
  //       },
  //     });
  //   }
  // };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.create({
  //     trigger: window,
  //     start: "top top",
  //     end: "bottom bottom",
  //     onEnter: goToSection,
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); 
  //   };
  // }, []);


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

    {/* <h1>hellow wold</h1> */}
    <main className="main" id="top">
      <div className="cursor-outer d-none d-md-block"></div>
     
     <Header/>

      <section className="py-4 pt-md-0 pb-8 pb-sm-11 mt-lg-n8">
        <div className="container px-md-5">
          <div className="row">
            <div className="col-md-9 col-lg-7">
              <h1 className="fs-4 fs-md-6 fs-xl-7 mb-5 mb-lg-0 position-relative z-index-2">Fotogency <span className="fw-thin text-300">deals with first class </span><span className="text-400">photography  orphan services.</span></h1>
            </div>
          </div>
          <div className="row mt-md-n6">
            <div className="col-2 d-none d-lg-block mt-auto"><img className="img-fluid" src="../src/assets/img/home/img2.png" /></div>
            <div className="col-1 mt-auto d-none d-lg-block"><a className="scroll-indicator text-warning" href="#footer"> <span>SCROLL </span><img src="../src/assets/img/icons/long-arrow.png" /></a></div>
            <div className="col-lg-7 position-relative">
              <div className="position-relative overflow-hidden overflow-md-visible"><img className="img-fluid" src="../src/assets/img/home/img1.png" />
                <div className="img-circle p-5 p-md-7 rounded-circle" />
                <div className="img-circle-2 p-5 p-md-7 rounded-circle" />
              </div>
              <div className="position-absolute bottom-n100 col-11 mt-6 d-none d-md-block">
                <p className="fs-2 lh-1 text-400">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                <p className="text-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
              </div>
              <div className="position-absolute start-0 bottom-0 d-lg-none"><a className="scroll-indicator text-warning" href="#footer"> <span>SCROLL </span><img src="../src/assets/img/icons/long-arrow.png" /></a></div>
            </div>
            <div className="col-2 d-none d-lg-block mb-auto"><img className="img-fluid" src="../src/assets/img/home/img3.png" /></div>
          </div>
        </div>

      </section>


      <section>
        <div className="wrapper">
          <div className="column left">
            <div className="element green">
              <h1>LEFT COLUMN ONE</h1>
            </div>
            <div className="element tomato">
              <h1>LEFT COLUMN TWO</h1>
            </div>
            <div className="element teal">
              <h1>LEFT COLUMN THREE</h1>
            </div>
          </div>
          <div className="column right">
            <div className="element fuchsia">
              <h1>RIGHT COLUMN ONE</h1>
            </div>
            <div className="element gray">
              <h1>RIGHT COLUMN TWO</h1>
            </div>
            <div className="element blue">
              <h1>RIGHT COLUMN THREE</h1>
            </div>
          </div>
        </div>

      </section>
    </main>


    <footer className="bg-footer-black" id="footer">
      <div className="container py-7 px-md-5">
        <div className="row g-0">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="mb-4 d-inline-block">
              <a className="navbar-brand pt-0 fs-3 text-white d-flex align-items-center" href="index.html">
                <img className="img-fluid" src="../src/assets/img/icons/dark-logo-icon.png" width={25} height={25} />
                <span className="fw-bolder ms-2">Foto</span><span className="fw-thin">gency</span>
              </a>
            </div>
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
            <div className="d-flex gap-2 flex-wrap justify-content-between align-items-center"><a className="social-icons" href="https://www.facebook.com/" target="_blank">Facebook</a>
              <a className="social-icons" href="https://www.flickr.com/photos/" target="_blank">Flickr</a>
              <a className="social-icons" href="https://twitter.com/" target="_blank">Twitter</a>
              <a className="social-icons" href="https://www.instagram.com/" target="_blank">Instagram</a>
              <a className="social-icons" href="https://www.youtube.com/" target="_blank">Youtube</a>
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



