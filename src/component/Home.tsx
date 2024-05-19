// import { useState } from 'react'
import '../assets/css/scroll.css'
import React, { useEffect } from 'react';
import Header from '../layouts/Header';

import { gsap } from 'gsap/gsap-core';


// import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Home() {

  console.log("the gsap values ",gsap);

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

        <Header />

        <section className="py-4 pt-md-0 pb-8 pb-sm-11 mt-lg-n8">
          <div className="container px-md-5">
            <div className="row">
              <div className="col-md-9 col-lg-7">
                <h1 className="fs-4 fs-md-6 fs-xl-7 mb-5 mb-lg-0 position-relative z-index-2">Adeweb <span className="fw-thin text-300">As web developer </span><span className="text-400">Creation of the  softwares.</span></h1>
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
        <section className="py-3 position-relative">
          <div className="container-fluid px-0">
            <div className="position-absolute w-100 border-dashed-bottom opacity-25 top-5 z-index-2" />
            <div className="container px-md-5">
              <div className="row g-0">
                <div className="col-lg-12 pb-6 px-0 mb-lg-0">
                  <div className="swiper-container swiper-theme" data-swiper="{&quot;slidesPerView&quot;:1,&quot;breakpoints&quot;:{&quot;576&quot;:{&quot;slidesPerView&quot;:1.2}},&quot;spaceBetween&quot;:30,&quot;grabCursor&quot;:true,&quot;pagination&quot;:{&quot;el&quot;:&quot;.swiper-pagination&quot;,&quot;clickable&quot;:true},&quot;loop&quot;:true,&quot;loopedSlides&quot;:3,&quot;slideToClickedSlide&quot;:true}">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="row align-items-xl-center">
                          <div className="col-lg-5">
                            <img className="img-fluid w-100" src="../src/assets/img/exhibitions/img01.png" />
                            <div className="position-absolute top-5 start-5 mt-n1 d-flex flex-column align-items-center">
                              <span className="rounded-circle bg-white p-2 d-block" /><span className="text-white fw-bold">2017</span></div>
                          </div>
                          <div className="col-lg-6 col-xl-5 mt-4 mt-lg-0">
                            <h1 className="fw-bolder mb-3">About AdeWeb</h1>
                            <p className="text-warning fs-3 opacity-75">Individual</p>
                            <p className="fs-0 text-dark">

I possess a comprehensive skill set and substantial experience in software development, with a focus on testing, system analysis, project planning, backend, and frontend technologies.
 Armed with certifications in testing methodologies and system analysis techniques, </p>.
 
 <p className="fs-0 text-dark text-center">I have honed my ability to ensure the quality and efficiency of software systems. Proficient in Java, 
 I hold master certifications and excel in utilizing Spring Boot for robust backend development. Additionally, 
 I am skilled in Laravel and React, enabling me to contribute to comprehensive full-stack solutions.
In tandem with my technical proficiency, </p>
<p className="fs-0 text-dark">I have earned specialized certifications in project planning.
 I bring strategic insight to create effective project plans that align with organizational goals and ensure timely and successful software delivery. My approach involves leveraging agile methodologies and 
 industry best practices to drive project success. </p>

 <p className="fs-0 text-dark"> My expertise extends to web services, with hands-on experience in Google Cloud Platform (GCP) and Amazon Web Services (AWS). This diverse skill set positions me as a valuable asset, capable of driving excellence across the entire software development lifecycle."
</p>

 
                            {/* <button className="btn btn-link text-warning p-0 fs-2"><span className="fw-bolder">Details </span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button> */}
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
        </section>

      </main>


      <footer className="bg-footer-black" id="footer">
        <div className="container py-7 px-md-5">
          <div className="row g-0">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="mb-4 d-inline-block">
                <a className="navbar-brand pt-0 fs-3 text-white d-flex align-items-center" href="index.html">
                  <img className="img-fluid" src="../src/assets/img/icons/dark-logo-icon.png" width={25} height={25} />
                  <span className="fw-bolder ms-2">Ade</span><span className="fw-thin">Web</span>
                </a>
              </div>
              <div className="col-12 col-md-10 text-300 mb-3"><i className="fas fa-map-marker-alt" /><a className="nav-link text-300 d-inline" href="https://maps.app.goo.gl/mWypjptRbAYQY3e56">Makumbusho ,Kinondoni Dar-es-salaam</a></div>
              <div className="col-12 col-md-10 text-300 mb-3"><i className="fas fa-phone" /><a className="nav-link text-300 d-inline" href="tel:+8801976476893">+255 653321198</a></div>
              <div className="col-12 col-md-10 text-300 mb-3"><i className="fas fa-envelope" /><a className="nav-link text-300 d-inline" href="mailto:developer@adeweb.co.tz">developer@adeweb.co.tz</a></div>
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
              <div className="d-flex gap-2 flex-wrap justify-content-between align-items-center"><a className="social-icons" href="#" target="_blank">Facebook</a>
                <a className="social-icons" href="https://twitter.com/adevoweb" target="_blank">Twitter</a>
                <a className="social-icons" href="https://www.instagram.com/adevoweb/" target="_blank">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-black py-0">
        <div className="container px-md-5">
          <div className="row g-0 justify-content-md-between justify-content-evenly py-4">
            <div className="col-4 col-sm-4 col-md-4">

            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-auto text-center text-md-start">
              <p className="fs--1 my-2 fw-light text-100">All rights Reserved © adeweb, 2023</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4">

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}



