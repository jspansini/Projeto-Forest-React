import React from "react";
import { Card, Button } from 'react-bootstrap';
import './style.css'

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'


export default function Cards() {
  return (
      <div className="divisor">
        <Card className="cartao">
            <Card.Body className="unidade">
                <Card.Img variant="top" src={img1} />
                <Card.Title>MALDIVAS</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="danger">RESERVE JÁ</Button>
            </Card.Body>
            <Card.Body className="unidade">
                <Card.Img variant="top" src={img2} />
                <Card.Title>SUIÇA</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="danger">RESERVE JÁ</Button>
            </Card.Body>
            <Card.Body className="unidade">
                <Card.Img variant="top" src={img3} />
                <Card.Title>NILÓPOLIS</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="danger">RESERVE JÁ</Button>
            </Card.Body>
        </Card>
    </div>
  );
}
