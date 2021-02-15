import React from 'react'
import { Header } from './Header';
import {Card} from './Card'
import { Title } from './Title';

const DesarrolloScreen = () => {
    return (
        <div>
            <main>
                <Header />
                <Title />
                <div className="content_section">
                    <Card 
                    title_card='Cosideración 1'
                    content_card='Laboratorios ESKO en razón de los equipos que posee por 
                    estar certificado en buenas prácticas de manufactura solo puede fabricar
                    productos cuya cantidad mínima sean 100 Kg por referencia o de acuerdo 
                    con la presentación 1000u de producto terminado.'
                    />
                    <Card 
                    title_card='Consideración 2'
                    content_card='Si el cliente tiene fórmulas aprobadas, se firma un acuerdo 
                    de confidencialidad y se procede a realizar ensayos de verificación de la
                    fórmula y entregar muestras al cliente para su evaluación.'
                    />
                    <Card 
                    title_card='Consideración 3'
                    content_card='Si el cliente desea que se le desarrolle una formula exclusiva
                    se tienen los siguientes puntos:'
                    />
                </div>
                <div className="content_section">
                    <h1>Proceso</h1>
                </div>
            </main>
        </div>
    )
}
export default DesarrolloScreen;