import React, {Component} from 'react';
import { NavLink,withRouter} from 'react-router-dom'
import './navs.css';
import logot from './logot.png'
import logot2 from './logot2.png'


class  Navbar extends Component  {
  state= {
    className: "menu"
  };
  state = {
  lol: logot
  };
  
  componentDidMount() {
    document.addEventListener("scroll", () => {
     const scrolled= window.scrollY ;
     console.log (scrolled)

        if(scrolled > 0 && scrolled <467) {
          this.setState({className: "menu2"})
          this.setState({lol: logot})
        }
        else if(scrolled > 467){
          this.setState({className: "menu3"})
          this.setState({lol: logot2})
        }
        else if (scrolled === 0 ){
          this.setState({className: "menu"})
          this.setState({lol: logot})
        }
      

      
    })
  }

  render(){
  
  return (
   <nav  className= {this.state.classNav} >
      <div className={this.state.className|| "menu"}>
       <img src={ this.state.lol} alt= "icono" className= "logo" /> 
        <ul className= "nav-mobile">
         <li><NavLink exact to= "/">Home</NavLink></li>
         <li><NavLink to = "about">About</NavLink></li>
         <li><NavLink to = "projects"> Projects</NavLink></li>
         <li><NavLink to = "extra">Extra</NavLink></li>
         <li><NavLink to = "fun">Fun</NavLink></li>
        
        </ul>
      </div>
    </nav>
  )
}
}

   
  
export default withRouter(Navbar)