import React from "react";
import { Link } from "react-router-dom";

export function FooterMenu(props) {
  const noHref = "#";

  return (
    <div className="footer_ctr_menu">
      <div>
        The<br />
        Nutritional<br />
        Bean<br />
        <img src="/assets/bean.svg" alt="Bean" />
      </div>

      <div>
        <ul>
          <li>
            <Link to="/services" title="Services">Services</Link>
          </li>
          <li>
            <Link to="/therapy" title="Therapy">Therapy</Link>
          </li>
          <li>
            <Link to="/about" title="About Harriet">About Harriet</Link>
          </li>
          <li>
            <a href={noHref} title="Blog">Blog</a>
          </li>
          <li>
            <a href={noHref} title="Bookings">Bookings</a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/contact" title="Contact">Contact</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/thenutritionalbean" target="_blank" rel="noopener noreferrer" title="Instagram">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/thenutritionalbean" target="_blank" rel="noopener noreferrer" title="Facebook">Facebook</a>
          </li>
          <li>
            <Link to="/privacy" title="Privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/terms" title="Access">Terms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
