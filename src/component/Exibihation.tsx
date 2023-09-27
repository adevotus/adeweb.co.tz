import React, { useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import SwiperCore from 'swiper';
import { Pagination } from "swiper/modules";


function Exibihation() {
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
                <Header />
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
                                                    <div className="col-lg-5"><img className="img-fluid w-100" src="../src/assets/img/exhibitions/img01.png" />
                                                        <div className="position-absolute top-5 start-5 mt-n1 d-flex flex-column align-items-center"><span className="rounded-circle bg-white p-2 d-block" /><span className="text-white fw-bold">2017</span></div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-5 mt-4 mt-lg-0">
                                                        <h1 className="fw-bolder mb-3">Through the Eyes of Kubrick</h1>
                                                        <p className="text-warning fs-3 opacity-75">Individual</p>
                                                        <p className="fs-0 text-dark">s a genre of Japanese art that became popular in the 17th century through to the 19th century. The word roughly translates as “pictures of the floating world” and artists belonging to 
                                                        the movement produced woodblock prints and paintings of scenes from history and folktales, sumo wrestlers, landscapes of flora and fauna, and a touch of erotica.</p>
                                                        <button className="btn btn-link text-warning p-0 fs-2"><span className="fw-bolder">Details </span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row align-items-xl-center">
                                                    <div className="col-lg-5"><img className="img-fluid w-100" src="../src/assets/img/exhibitions/img02.png" />
                                                        <div className="position-absolute top-5 start-5 mt-n1 d-flex flex-column align-items-center"><span className="rounded-circle bg-white p-2 d-block" /><span className="text-white fw-bold">2015</span></div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-5 mt-4 mt-lg-0">
                                                        <h1 className="fw-bolder mb-3">Wave of Surrealism in photography</h1>
                                                        <p className="text-warning fs-3 opacity-75">Collective</p>
                                                        <p className="fs-0 text-dark">s a genre of Japanese art that became popular in the 17th century through to the 19th century. The word roughly translates as “pictures of the floating world” and artists 
                                                        belonging to the movement produced woodblock prints and paintings of scenes from history and folktales, sumo wrestlers, landscapes of flora and fauna, and a touch of erotica.</p>
                                                        <button className="btn btn-link text-warning p-0 fs-2"><span className="fw-bolder">Details </span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row align-items-xl-center">
                                                    <div className="col-lg-5"><img className="img-fluid w-100" src="../src/assets/img/exhibitions/img03.png" />
                                                        <div className="position-absolute top-5 start-5 mt-n1 d-flex flex-column align-items-center"><span className="rounded-circle bg-white p-2 d-block" /><span className="text-white fw-bold">2015</span></div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-5 mt-4 mt-lg-0">
                                                        <h1 className="fw-bolder mb-3">Through the Eyes of Kubrick</h1>
                                                        <p className="text-warning fs-3 opacity-75">Individual</p>
                                                        <p className="fs-0 text-dark">s a genre of Japanese art that became popular in the 17th century through to the 19th century. The word roughly translates as “pictures of the floating world” 
                                                        and artists belonging to the movement produced woodblock prints and paintings of scenes from history and folktales, sumo wrestlers, landscapes of flora and fauna, and a touch of erotica.</p>
                                                        <button className="btn btn-link text-warning p-0 fs-2"><span className="fw-bolder">Details </span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row align-items-xl-center">
                                                    <div className="col-lg-5"><img className="img-fluid w-100" src="../src/assets/img/exhibitions/img04.png" />
                                                        <div className="position-absolute top-5 start-5 mt-n1 d-flex flex-column align-items-center"><span className="rounded-circle bg-white p-2 d-block" /><span className="text-white fw-bold">2015</span></div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-5 mt-4 mt-lg-0">
                                                        <h1 className="fw-bolder mb-3">Through the Eyes of Kubrick</h1>
                                                        <p className="text-warning fs-3 opacity-75">Individual</p>
                                                        <p className="fs-0 text-dark">s a genre of Japanese art that became popular in the 17th century through to the 19th century. The word roughly translates as “pictures of the floating world” and artists belonging to the movement produced woodblock prints and paintings of scenes from history and folktales, sumo wrestlers, landscapes of flora and fauna, and a touch of erotica.</p>
                                                        <button className="btn btn-link text-warning p-0 fs-2"><span className="fw-bolder">Details </span><img className="ms-3" src="../src/assets/img/icons/long-arrow.png" /></button>
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
            <Footer />
        </div>
    )
}

export default Exibihation