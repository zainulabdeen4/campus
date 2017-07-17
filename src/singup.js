import React, { Component } from 'react';
import './singup.css';
import Toolbar from './toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import './page.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';



const style = {
  height: 300,
  width: 400,
  textAlign: 'center',
  display: 'inline-block',
   
};
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};



class Singup extends Component {

  constructor(){
    super();
    this.save = this.save.bind(this);
    this.submitted = this.submitted.bind(this);
    this.state={
      username: '',
      password: '',
      email : '',
      type : ''
    }
  }
  save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}
submitted(e){
  let abc = JSON.parse(localStorage.getItem('student'))
  let arr = abc == null  ? [] : abc;
  this.state.username = this.state.username.toLocaleLowerCase();
  arr.push(this.state);
  localStorage.setItem('student',JSON.stringify(arr));
  
   this.props.history.push('/');

  }
  
  render() {
    return (
      
      <MuiThemeProvider>
        <div>
        <Toolbar />
        <div>
    
    <Paper style={style} zDepth={3} rounded={false} id="abc" >
    <TextField
      floatingLabelText="user name"
      onChange = {this.save}
      value = {this.state.username}
      name = "username"/>

    <TextField
      hintText="password"
      floatingLabelText="password"
      type="password"
      name = "password"
      value ={this.state.password}
      onChange = {this.save}/>

    <TextField
      hintText="email"
      floatingLabelText="email"
      name = "email"
      value ={this.state.email}
      onChange = {this.save}/>

      <br />
      
      <RadioButtonGroup name="type"  onChange = {this.save} >
      <RadioButton
        value='student'
        label='student'
        style={styles.radioButton}
        
      />
      <RadioButton
        value='company'
        label='company'
        style={styles.radioButton}
      />

      </RadioButtonGroup>
      
    <br />

    <RaisedButton label="sign up"
     primary={true} onClick={this.submitted} />
    </Paper>
    
    
  </div>
        </div>
    </MuiThemeProvider>
    
    );
  }
}

export default Singup;
