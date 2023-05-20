import "./Global.css";

function Footer() {
  const socialLinks = [
    {
      id: 1,
      alt: "facebook",
      src: "assets/icon/icon_facebook.svg",
    },
    {
      id: 2,
      alt: "instagram",
      src: "assets/icon/icon_instagram.svg",
    },
    {
      id: 3,
      alt: "twitter",
      src: "assets/icon/icon_twitter.svg",
    },
    {
      id: 4,
      alt: "mail",
      src: "assets/icon/icon_mail.svg",
    },
    {
      id: 5,
      alt: "twitch",
      src: "assets/icon/icon_twitch.svg",
    },
  ];

  return (
    <section className="footer mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <address className="address">
              <p className="mb-2 mb-md-3">
                Jalan Suroyo No. 161 Mayangan Kota Semarang 672000
              </p>
              <p className="mb-2 mb-md-3">
                <a href="mailto:binarcarrental@gmail.com">
                  binarcarrental@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:081233334808">081-233-334-808</a>
              </p>
            </address>
          </div>
          <div className="col-md-2 servis">
            <p className="mb-2 mb-md-3">
              <a href="#our-service">Our services</a>
            </p>
            <p className="mb-2 mb-md-3">
              <a href="#why-use">Why Us</a>
            </p>
            <p className="mb-2 mb-md-3">
              <a href="#testimonial">Testimonial</a>
            </p>
            <p>
              <a href="#faq">FAQ</a>
            </p>
          </div>
          <div className="col-md-4 mb-3 connect">
            <p>Connect with us</p>
            {socialLinks.map((socialLink) => (
              <img
                key={socialLink.id}
                className="me-3"
                src={socialLink.src}
                alt={socialLink.alt}
              />
            ))}
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
