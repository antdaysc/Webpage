import React from 'react';
import './sidedrawer.css';

const SideDrawer = props => {
 let drawerClasses = 'side-drawer';
 if (props.show){
     drawerClasses= 'side-drawer open';
 }

    return(
    <nav className= {drawerClasses}>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/Nosotros">Nosotros</a></li>
            <li><a href="/Protocolos">Protocolos</a></li>
            <li><a href="/Servicios">Servicios</a></li>
            <li><a href="/Instalaciones">Instalaciones</a></li>

        </ul>
    </nav>
    );
};

export default SideDrawer;