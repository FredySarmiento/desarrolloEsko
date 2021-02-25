import React from 'react';
import { Card_Time } from './Card_Time';
import img1 from '../img/1.png';

export const Proceso = () => {
    return (
        <div>
            <h1 className="title_center">Proceso</h1>
            <Card_Time 
            title='Definición del producto'
            textbody='el cliente informa las características del producto que requiere,
            el cliente al cual va dirigido, perfil de precio, si es posible envía una 
            muestra del sensorial que desea o producto similar.'
            urlimg={img1}
             />
       </div>
    )
}
