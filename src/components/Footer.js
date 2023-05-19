function Footer() {
    return (
    <section className="footer mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <address className="address">
              <p className="mb-2 mb-md-3">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p className="mb-2 mb-md-3"><a href="mailto:binarcarrental@gmail.com">binarcarrental@gmail.com</a></p>
              <p><a href="tel:081233334808">081-233-334-808</a></p>
            </address>
          </div>
          <div className="col-md-2 servis">
            <p className="mb-2 mb-md-3"><a href="#our-service">Our services</a></p>
            <p className="mb-2 mb-md-3"><a href="#why-use">Why Us</a></p>
            <p className="mb-2 mb-md-3"><a href="#testimonial">Testimonial</a></p>
            <p><a href="#faq">FAQ</a></p>
          </div>
          <div className="col-md-4 mb-3 connect">
            <p>Connect with us</p>
            <a href="#"><img className="me-2" src="assets/icon/icon_facebook.svg" alt="facebook" /></a>
            <a href="#"><img className="me-2" src="assets/icon/icon_instagram.svg" alt="instagram" /></a>
            <a href="#"><img className="me-2" src="assets/icon/icon_twitter.svg" alt="twitter" /></a>
            <a href="#"><img className="me-2" src="assets/icon/icon_mail.svg" alt="mail" /></a>
            <a href="#"><img className="me-2" src="assets/icon/icon_twitch.svg" alt="twitch" /></a>
          </div>
          <div className="col-md-2 copyright">
            <p>Copyright Binar 2022</p>
            <div className="logo"></div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
export default Footer;  