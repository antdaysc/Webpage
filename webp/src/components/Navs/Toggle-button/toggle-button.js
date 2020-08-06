import React, {Component} from 'react'
import './toggle-button.css'


    class ToggleButton extends Component {
        state= {
            className: "toggle-button_line"
          };

          componentDidMount() {
            document.addEventListener("scroll", () => {
             const scrolled= window.scrollY ;
             console.log (scrolled)
        
                
                if(scrolled > 150){
                  this.setState({className: "toggle-button_line1"})
        
                }
                else if (scrolled === 0 ){
                  this.setState({className: "toggle-button_line"})
                }
              
        
              
            })
          }
        render() {
            return(
    <div className= "toggle-box">
    <button className= "toggle-button" onClick= {this.props.click}>
        <div className={this.state.className} />
        <div className={this.state.className}/>
        <div className={this.state.className}/>
    </button>
    </div>
            )
        }
    }

export default ToggleButton;