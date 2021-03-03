import React from 'react';
import { Card_Time } from './Card_Time';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';
import img9 from '../img/9.png';
import img10 from '../img/10.png';

export const Proceso = () => {
    return (
        <div>
            <h1 className="title_center">Proceso</h1>
            <div className="content_section">
                <Card_Time 
                title='1. Definición del producto'
                textbody='el cliente informa las características del producto que requiere,
                el cliente al cual va dirigido, perfil de precio, si es posible envía una 
                muestra del sensorial que desea o producto similar.'
                urlimg={img1}
             />
                <Card_Time 
                title='2. Consecución MP'
                textbody='Cuando sea exclusiva o no se utilice en ESKO)'
                urlimg={img2}
             />
                <Card_Time 
                title='3. Ajustes de la Formula:'
                textbody='basado en los comentarios y retroalimentación del cliente y si se requiere se hace ajuste en la fórmula y se entrega nueva muestra hasta satisfacción A MUESTRA'
                urlimg={img3}
             />
            </div>
            <div className="content_section">
                <Card_Time 
                title='4. Estabilidad'
                textbody='La muestra aprobada por el cliente se somete a test de estabilidad fisicoquímica para validad la efectividad de los conservantes seleccionados.'
                urlimg={img4}
             />
                <Card_Time 
                title='5. Test de desafio microbiologico'
                textbody='(Prueba incluida en el costo)'
                urlimg={img5}
             />
                <Card_Time 
                title='6. Eficacia'
                textbody='Son pruebas externas a la empresa (Si el cliente requiere estos ensayos se cotizan, pero no están incluidos en el costo.).'
                urlimg={img6}
             />                          
            </div>
            <div className="content_section">
                <Card_Time 
                title='7. Notificacón Invima'
                textbody='$ 2.533.439 Pagada por el cliente.
                CAMBIOS INVIMA De acuerdo con el cambio las tarifas son: $ 258.151 - $ 355.714 - $ 403.428'
                urlimg={img7}
             />
                <Card_Time 
                title='8. Costos'
                textbody='El desarrollo puede variar entre $ 2.000.000 hasta $ 4.000.000 por producto según la complejidad del producto.
                Para ensayos de verificación el costo estará entre $ 600.000 - $2.000.000 de acuerdo con la complejidad del producto.'
                urlimg={img8}
             />
                <Card_Time 
                title='9. Proceso de fabricación'
                textbody='ESKO suministra las materias primas que maneje en sus Inventarios. Las materias primas exclusivas del cliente serán suministradas por este..'
                urlimg={img9}
             />                          
            </div>
            <div className="content_section">
                <Card_Time 
                title='10. Cotización producto terminado:'
                textbody='Se realiza una vez finalizado el desarrollo y cuando se tenga la ficha técnica del producto terminado suministrada por el cliente en la cual debe incluir como va a salir el producto terminado al mercado'
                urlimg={img10}
             />             
            </div>
       </div>
    )
}
