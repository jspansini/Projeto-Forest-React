import React from "react";
import Carrousel from "./components/carrosel";
import Header from "./components/header";
import Cards from "./components/cards";
import { Form, Button, carousel } from "react-bootstrap";
import "./style.css";

import img01 from "./img/f.png";
import img02 from "./img/g.png";
import img03 from "./img/ins.png";
import img04 from "./img/top_design.png";

import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpg";

function Contato() {
  return (
    <>
      <Header />
      <div className="picture">
        <div className="main">
          <div>
            <form className="form">

                <div className="socialMedia">
                <a>
                  <img src={img01} width="30px" alt="facebook" />
                </a>
                <a>
                  <img src={img02} width="30px" alt="google" />
                </a>
                <a>
                  <img src={img03} width="30px" alt="instagram" />
                </a>
              </div>


                <div className="cad">
                  <span>LOGIN</span>
                </div>
              <label for="name">
                <span>Nome:</span>
                <input type="text" name="name" id="name" />
              </label>

              <label for="email">
                <span>Email:</span>
                <input type="email" name="email" id="email" />
              </label>

              <label for="password">
                <span>Senha:</span>
                <input type="password" name="password" id="password" />
              </label>
              <input type="submit" value="Entrar" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
