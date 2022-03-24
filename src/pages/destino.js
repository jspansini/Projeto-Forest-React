import React from "react";
import Carrousel from "./components/carrosel";
import Header from "./components/header";
import Cards from "./components/cards";
import { Card, Carousel, Alert } from "react-bootstrap";

import imgs from "./img/imgs.jpg";

function Destino() {
  return (
    <>
      <Header />

      <Card className="bg-dark text-white">
        <Card.Img src={imgs} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title classname="title">Promoções diárias</Card.Title>
          <Carousel.Caption>
            <h3>AQUI VOCÊ ACHA!</h3>
            <h2>
              {" "}
              Motéis. Hotéis. Villas. Economize 10% com Genius. Pousadas.
              Albergue.
            </h2>
          </Carousel.Caption>
        </Card.ImgOverlay>
      </Card>

      <Alert variant="success">
        <Alert.Heading>SÓ AS MELHORES PROMOÇÕES</Alert.Heading>
        <p>
          Reserve em 85.000 destinos no mundo todo. Site oficial da
          fORESTGUMP.com. Apartamentos de ferias. Motéis. Hotéis. Villas.
          Economize 10% com Genius. Pousadas. Albergue.
        </p>
        <hr />
        <p className="mb-0">
          Site oficial da Booking.com. Apartamentos de ferias.
        </p>
      </Alert>
      <Cards />
    </>
  );
}

export default Destino;
