import React from "react";


export default function Footer() {
    return(
        <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Geograce</h3>
            <p>
              7th Floor, Peaksun Bldg., 1505 Princeton Street Shaw Blvd. <br  />
              br /gy. Wack-Wack Greenhills East Mandaluyong City,<br  />
              Philippines 1552 <br /><br />
              <strong>Phone:</strong> (02) 8856-2013 / <br />
              (02) 8856-2015<br />
              <strong>Telefax:</strong> (632) 8856-2013<br />
              <strong>Email:</strong> g.geograce@yahoo.com<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Social Networks</h4>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">

      <div className="copyright-wrap d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>Geograce</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            
          </div>
        </div>
        
      </div>

    </div>
  </footer>
    )
}