
import React from 'react';
import './footer.css';



const Footer= () => {
    return (
<footer>
    <div className="footer">
    	<div className="containe">
    		<div className="row">
    		    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
    				<h6>MENU</h6>
    				<ul className="column list-unstyled">
    					<li><a href="/">Inicio</a></li>
    					<li><a href="/Nosotros">Nosotros</a></li>
    					<li><a href="/Servicios">Servicios</a></li>
    					<li><a href="/Instalaciones">Instalaciones</a></li>
    				</ul>
    			</div>
    			
    			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
    				<h6>PROTOCOLOS</h6>
    				<ul className="column list-unstyled">
    					<li><a href="/Protocolos">Tarjeta Morada</a></li>
    					<li><a href="/Protocolos">Tarjeta Sport</a></li>
    					<li><a href="/Protocolos">Tarjeta Gymgirl</a></li>
    				</ul>
    			</div>
    		   
    			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
    				<h6>CONTACTO</h6>
    				<ul className="column list-unstyled">
    					<li>Mail: clinical.move@outlook.es</li>
    				    <li>Telefono:+ 204 70 14</li>
    					<li>Facebook: clinicalmove</li>
    				</ul>
    			</div>
    		</div> 
    	</div>
    </div>
    <div className="ikonlar">
       <div className="containe">
    	  <div className="row text-center">
    			<a href="https://www.facebook.com/clinicalmove/"><span className="fa fa-facebook-square"></span></a>
    			<a href="#"><span className="fa fa-phone-square"></span></a>
    			<a href="mailto:clinical.move@outlook.es"><span className="fa fa-envelope-square"></span></a>
    			
    			<p>Clinical Move © 2020. Todos los derechos reservados</p>
    	   </div>
    	</div>
    </div>
</footer>
    



    )
}

        export default Footer