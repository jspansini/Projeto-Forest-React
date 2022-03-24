import React from "react";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="nanav navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="150px" />
          </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
            <span class="navbar-toggler-icon"></span>
            </button>

          <div class="nanav collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/destino">
                  Destinos
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/promo">
                  Promoções
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
