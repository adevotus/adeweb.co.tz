import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import  { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

function Gallery() {
    const [activeTab, setActiveTab] = useState<string>('*');
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const isotope = useRef<Isotope | null>(null);

    useEffect(() => {
        if (galleryRef.current) {
            isotope.current = new Isotope(galleryRef.current, {
                itemSelector: '.gallery-item',
                layoutMode: 'packery',
            });
        }
    }, []);

    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: activeTab });
        }
    }, [activeTab]);

    const handleTabClick = (filter: string) => {
        setActiveTab(filter);
    };



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
                <Header />
                <section className="pt-3 pb-9 position-relative">
                    <div className="container px-md-5">
                        <div className="position-md-absolute start-0 ms-2 mt-3 mb-4">
                            <ul className="nav gallery-tab d-flex gap-3" data-filter-nav="data-filter-nav">
                                <li className="nav-item">
                                    <a className={`nav-link p-0 py-md-2 isotope-nav ${activeTab === '*' ? 'active' : ''}`} href="#!" onClick={() => handleTabClick('*')}>All
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link p-0 py-md-2 isotope-nav ${activeTab === '.shortfilms' ? 'active' : ''}`}
                                        href="#!"
                                        onClick={() => handleTabClick('.shortfilms')}
                                    >
                                        Short films
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link p-0 py-md-2 isotope-nav ${activeTab === '.professional' ? 'active' : ''}`}
                                        href="#!"
                                        onClick={() => handleTabClick('.professional')}
                                    >
                                        Professional
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link p-0 py-md-2 isotope-nav ${activeTab === '.commercial' ? 'active' : ''}`}
                                        href="#!"
                                        onClick={() => handleTabClick('.commercial')}
                                    >
                                        Commercial
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row g-3" data-isotope="{&quot;layoutMode&quot;:&quot;packery&quot;}">
                            <div className="col-lg-3 col-sm-6 col-12 shortfilms gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/1.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-3 col-sm-6 col-12 shortfilms gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/2.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-6 col-12 shortfilms gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/3.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-6 col-12 professional gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/4.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-3 col-sm-6 col-12 professional gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/5.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-3 col-sm-6 col-12 professional gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/6.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-3 col-sm-6 col-12 commercial gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/7.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-3 col-sm-6 col-12 commercial gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/8.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                            <div className="col-lg-6 col-12 commercial gallery-item isotope-item"><img className="img-fluid w-100" src="../src/assets/img/gallery/9.png" data-glightbox="title: To infinity and beyond; description: Iching biching chiching" /></div>
                        </div>

                    </div>
                </section>
            </main>




            <Footer />

        </div>
    )
}

export default Gallery