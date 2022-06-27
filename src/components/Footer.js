import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer-site-links">
        <div className="footer-settings">
          <h3 className="footer-settings-heading">Settings</h3>
          <Link className="footer-site-item" to="">
            Login
          </Link>
          <Link className="footer-site-item" to="">
            iOS App
          </Link>
          <Link className="footer-site-item" to="">
            Android App
          </Link>
        </div>
        <div className="footer-articles">
          <h3 className="footer-settings-heading">Articles</h3>
          <Link className="footer-site-item" to="">
            Blog
          </Link>
        </div>
        <div className="footer-support">
          <h3 className="footer-settings-heading">Help {"&"} Support</h3>
          <Link className="footer-site-item" to="">
            FAQ
          </Link>
          <Link className="footer-site-item" to="">
            Media Inquiries
          </Link>
          <Link className="footer-site-item" to="">
            Careers
          </Link>
        </div>
      </div>
      <div className="footer-info-links">
        <div className="footer-social">
          <Link className="footer-social-link" to="">
            <FontAwesomeIcon icon={brands("twitter")} />
          </Link>
          <Link className="footer-social-link" to="">
            <FontAwesomeIcon icon={brands("facebook")} />
          </Link>
          <Link className="footer-social-link" to="">
            <FontAwesomeIcon icon={brands("pinterest")} />
          </Link>
          <Link className="footer-social-link" to="">
            <FontAwesomeIcon icon={brands("instagram")} />
          </Link>
        </div>
        <div className="footer-law">
          <Link className="footer-site-item" to="">
            PrivacyPrivacy
          </Link>
          <Link className="footer-site-item" to="">
            Terms of Use
          </Link>
          <Link className="footer-site-item" to="">
            Accessibility
          </Link>
          <p className="footer-site-item">&#169;2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
