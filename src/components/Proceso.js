import React from 'react';
import { Card_Time } from './Card_Time';
import img1 from '../img/1.png';

export const Proceso = () => {
    return (
        <div>
            <h1 className="title_center">Proceso</h1>
            <div className="content_section">
                <Card_Time 
                title='Definición del producto'
                textbody='el cliente informa las características del producto que requiere,
                el cliente al cual va dirigido, perfil de precio, si es posible envía una 
                muestra del sensorial que desea o producto similar.'
                urlimg={img1}
             />
                <Card_Time 
                title='Definición del producto'
                textbody='Cuando sea exclusiva o no se utilice en ESKO)'
                urlimg={img1}
             />
                <Card_Time 
                title='Ensayos:'
                textbody='ESKO elabora posibles formulaciones que cumplan con las características definidas por el cliente y presenta una o dos propuestas máximo'
                urlimg={img1}
             />
            </div>
            <div className="content_section">
                <Card_Time 
                title='Definición del producto'
                textbody='el cliente informa las características del producto que requiere,
                el cliente al cual va dirigido, perfil de precio, si es posible envía una 
                muestra del sensorial que desea o producto similar.'
                urlimg={img1}
             />
                <Card_Time 
                title='Definición del producto'
                textbody='el cliente informa las características del producto que requiere,
                el cliente al cual va dirigido, perfil de precio, si es posible envía una 
                muestra del sensorial que desea o producto similar.'
                urlimg={img1}
             />
                <Card_Time 
                title='Definición del producto'
                textbody='el cliente informa las características del producto que requiere,
                el cliente al cual va dirigido, perfil de precio, si es posible envía una 
                muestra del sensorial que desea o producto similar.'
                urlimg={img1}
             />                          
            </div>
       </div>
    )
}
