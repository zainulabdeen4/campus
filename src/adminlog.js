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
//import ActionFavorite from 'material-ui/svg-icons/action/favorite';
//import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import * as firebase from 'firebase';



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



class Adminlog extends Component {

  constructor(){
    super();
    this.save = this.save.bind(this); 
    this.submitted = this.submitted.bind(this);
    this.state={
      username: '',
      password: '',
      email : '',
      type : 'admin'
    }
  }
  save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}
submitted(e){

   firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + errorMessage);
    }).then(()=>{
     
         var uid = firebase.auth().currentUser.uid;
      firebase.database().ref('USER/'+ uid).set({
      name:this.state.username,
      Email:this.state.email,
      Pass:this.state.password,
      type:this.state.type

     });
     firebase.auth().signOut().then(() => {
    }).catch(function(error) {
    console.log(error);
});
  });

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

export default Adminlog;
