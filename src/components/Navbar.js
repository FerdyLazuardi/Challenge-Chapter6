function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/" onClick={e => e.preventDefault()} >
            <div className="logo"></div>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel" style={{ width: '50%' }}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" id="navbarOffcanvasLabel">BCR</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-lg-0">
                <li className="nav-item me-4">
                  <a className="nav-link" href="#our-service">Our Service</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#why-us">Why Us</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#testimonial">Testimonial</a>
                </li>
                <li className="nav-item me-4 mb-1 mb-lg-0">
                  <a className="nav-link" href="#faq">FAQ</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary" type="button">Register</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
