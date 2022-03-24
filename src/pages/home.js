import React from "react";
import Carrousel from "./components/carrosel";
import Header from "./components/header";
import Cards from "./components/cards";
import { Card, Button } from 'react-bootstrap';

function Home() {
    return(
        <>
            <Header />
            <Carrousel />

            <Cards />

            <Card className="text-center">
                <Card.Header>Compre agora, viaje quando quiser!</Card.Header>
                <Card.Body>
                    <Card.Title>2 anos de validade</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="danger">COMPRAR AGORA</Button>
                </Card.Body>
                <Card.Footer className="text-muted"> um texto aleatório contando uma coisa aleatória </Card.Footer>
            </Card>    

            
           
        </>


    );
}

export default Home