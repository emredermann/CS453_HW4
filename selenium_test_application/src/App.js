import './App.css';
import React from 'react';
import Select from 'react-select';
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap";

class App extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        email :"",
        password : ""
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if(name == "email")
            this.setState({email: value});
        if(name == "password")
            this.setState({password: value});
    }
   
    checkPassword(){     
      return ("/^[A-Z]*$/".test(this.state.password) && "/^[a-z]*$/".test(this.state.password) && "/[0-9]/".test(this.state.password))
    }
    handleSubmit() {
      if(this.checkPassword()){
        console.log (this.state.email,this.state.password)
      }else{
        alert("Your password does not hansle the requirements !")
      }
    }
       
    render() {      

    return (
        <div >
           <form
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <label>Enter your email:
            <input 
                            type="text" 
                            name = "email" 
                            onChange={this.handleChange} />
            </label>

            <label>Enter your password:
            <input 
                            type="password" 
                            name = "password" 
                            minLength="8" required
                            onChange={this.handleChange} />
            </label>
            <input type="Submit"  onClick={this.handleSubmit}/>
            
          </form>

           </div>
           
      );
    }
  }

  export default App;