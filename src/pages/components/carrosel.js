import React from "react";
import carr1 from './img/banner (1).jpg'
import carr2 from './img/banner (2).jpg'
import carr3 from './img/banner (3).jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


export default function Carro(){
    return(
        
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={carr1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>ENCONTRE O QUE VOCÊ PROCURA</h3>
                    <h2>E você pode estar buscando qualquer coisa!</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={carr2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>AQUI TEMOS</h3>
                    <h2>E com certeza é mais barato!</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carr3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>VOCÊ NÃO PRECISA IR PRA OUTRO LUGAR</h3>
                    <h2>Aqui temos e temos mais de um!</h2>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    
            
    )
}