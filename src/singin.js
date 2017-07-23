import React, { Component } from 'react';
import './singup.css';
import Toolbar from './toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import './page.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';


const style = {
  height: 300,
  width: 400,
  textAlign: 'center',
  display: 'inline-block',
   
};



class Singin extends Component {
    constructor(){
        super();
        this.save = this.save.bind(this);
    this.submitted = this.submitted.bind(this);
    this.state ={
        email:'',
        password:''
    }
}
submitted(e){
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
     var errorCode = error.code;
      var errorMessage = error.message;
      console.log( errorCode + errorMessage);
     
    }).then(()=>{
    //var typeCheck;
    var userId = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const userRef = rootRef.child('USER/'+ userId);
    userRef.on('value', snapshot => {
      if(snapshot.val().type === 'student'){
        //this.props.history.push('/student');
        this.props.history.push('/student');
    }
   if(snapshot.val().type === 'company'){
        this.props.history.push('/company');
    }
    if(snapshot.val().type === 'admin'){
      this.props.history.push('/admin');

    }
    else{
      
    }
     

});
         
  });
}
save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}

  
  render() {
    return (
      
      <MuiThemeProvider>
        <div>
        <Toolbar />
        <div>
    
    <Paper style={style} zDepth={3} rounded={false} id="abc" >
    <TextField
      hintText="email"
      floatingLabelText="email"
      name="email"
      onChange={this.save}

    />
    <TextField
      hintText="password"
      floatingLabelText="password"
      type="password"
      name="password"
      onChange={this.save}
    />
    
    <br />
    <RaisedButton label="sign in" primary={true} 
    onClick={this.submitted} />
    
    </Paper>
    
    
  </div>
        </div>
    </MuiThemeProvider>
    
    );
  }
}

export default Singin;
