
function Footer() {
    return (
        <div>
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

export default Footer