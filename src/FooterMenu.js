import React from "react";


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
            <a href={noHref} title="Services">Services</a>
          </li>
          <li>
            <a href={noHref} title="Therapy">Therapy</a>
          </li>
          <li>
            <a href={noHref} title="About Harriet">About Harriet</a>
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
            <a href={noHref} title="Contact">Contact</a>
          </li>
          <li>
            <a href={noHref} title="Instagram">Instagram</a>
          </li>
          <li>
            <a href={noHref} title="Facebook">Facebook</a>
          </li>
          <li>
            <a href={noHref} title="Privacy">Privacy</a>
          </li>
          <li>
            <a href={noHref} title="Access">Access</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
