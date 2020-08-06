import React, {Component} from 'react';
import  {Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';
import './Contact.css';
import clinics2 from '../clinics2.jpg'



class Contacto extends Component {
  constructor() {
    super()

    this.state = {
      nombre: '',
      email: '',
      mensaje: ''
    }
    
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if (response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name:'', email: '', message: ''})
  }
  render(){
  return (
    <div>
    <div className="Header">
      <h1>Contacto</h1>
       <img src={clinics2} alt= "fondo"  />
       </div>
    <div className= "window2">
      
      
        <div className="roar">
          
    <div className="Contacto-formato">
    <div className= "informacion">
    <a  href="https://goo.gl/maps/1CzKDMxWzPpW4aPZ7"><i class="fa fa-map-marker fa-2x"></i><h>Dirección</h></a>
        <p>Rio Tamesis 2001 Colonia Estrella
          Torreon, Mexico 27010</p>
          <a href= "tel:8712047014"><i class="fa fa-phone fa-2x" ></i><h>Teléfono</h></a> 
        <p>204 70 14</p>
        <a href= "mailto:clinical.move@outlook.es" ><i  class="fa fa-envelope fa-2x" ></i><h style= {{marginLeft:'2%'}}>Mail</h></a> 
        <p>clinical.move@outlook.es</p>
      </div>
    <div> <p className="titulo">Te invitamos a ponerte en contacto con nosotros para ayudarte a tomar la mejor
    decisión para tu  hij@ deportista.</p></div>
    <Form style={{marginLeft: '15%'}} spellcheck="false" onSubmit= {this.handleSubmit.bind(this)} method="POST"  className= "Form">
      <FormGroup >
    <Input 
    type="text" 
    className= "Form-control"
           name="nombre" 
           placeholder="Tu Nombre"
           value={this.state.name}
           onChange={this.onNameChange.bind(this)} />
      </FormGroup>

      <FormGroup >
    <Input 
    autocomplete="nope"
    type="email" 
    spellcheck="false"
    className= "Form-control" 
           name="email" 
           placeholder="E-mail" 
           value={this.state.email}
           onChange={this.onEmailChange.bind(this)} />
      </FormGroup>

    <FormGroup >
    <Input 
    className= "Form-control"
    type="textarea"
    name= "mensaje"
    placeholder="Escribe tu Mensaje"
    value={this.state.message}
    onChange={this.onMessageChange.bind(this)} />
    </FormGroup>

    <Button
    type="submit"> Enviar </Button>

    </Form>
    </div>
    </div>
    </div>
</div>
  );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
}

export default Contacto
