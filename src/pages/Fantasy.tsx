import React from 'react';
import './Fantasy.css';

const Fantasy = () => {
  return (
    <div className="fantasy-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="text-center">
                {/* Mobile Banner */}
                <div className="mobile-banner mb-4">
                  <a href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID" className="d-inline-block">
                    <img src="/images/1.jpg" className="img-fluid banner-img" alt="Fantasy Sports Banner" />
                  </a>
                </div>

                {/* Hero Content */}
                <div className="hero-content">
                  <h2 className="hero-title">
                    Daily <span className="highlight">Fantasy Sport</span>
                  </h2>
                  <p className="hero-text">
                    Your trusted partner for daily fantasy sports solutions! Our platform offers a secure,
                    compliant method for verifying player identities, creating a seamless and enjoyable
                    experience for all users.
                  </p>
                  <div className="button-wrapper">
                    <a href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID" 
                       className="custom-button">
                      <span>Register Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="text-center">
                <img src="/images/412.jpg" className="img-fluid mb-4" alt="Features" />
                <div className="section-content">
                  <h2 className="section-title">Get Your Online Account Today!</h2>
                  <p className="section-text">
                    Experience secure and reliable online account services with a trusted provider.
                  </p>
                  <h4 className="section-subtitle">
                    Open your account quickly and join our platform for genuine, trusted account solutions.
                  </h4>
                  <div className="button-wrapper mt-4">
                    <a href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID" 
                       className="custom-button">
                      <span>WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="disclaimer-section">
            <p className="disclaimer-text">
              <strong>Disclaimer:</strong> This Website is only for 18+ users. Please Leave This Site
              If you are from Telangana, Orissa, Assam, Sikkim, Andhra Pradesh and Nagaland.
              Be aware of fraudsters, we only deal via WhatsApp.
            </p>
            <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
            <p className="footer-note">We Only Promote Fantasy Sports.</p>
          </div>
          <hr className="footer-divider" />
          <div className="copyright">
            <p>Copyright © 2024. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Button */}
      <div className="fixed-bottom-cta">
        <a href="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID"
           className="cta-button">
          Click Here To Register
        </a>
      </div>
    </div>
  );
};

export default Fantasy;