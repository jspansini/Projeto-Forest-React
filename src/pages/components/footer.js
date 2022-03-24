import React from "react";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
        <div className="footer">
          <i class="bi bi-arrow-right-circle-fill">
          <p> Site construido para trabalho de conclusão curso recodePro</p></i> 
        </div>
    </>
  );
}
