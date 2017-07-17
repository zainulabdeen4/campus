import React, { Component } from 'react';
import './singup.css';
import Toolbar from './toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import './page.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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
        username:'',
        password:'',
        type:'',
    }
}
submitted(e){
  let abc = JSON.parse(localStorage.getItem('student'))
  let arr = abc == null  ? [] : abc;
  let index=arr.findIndex(i => i.username === this.state.username);
  if(index>=0 && arr[index].password === this.state.password ){
     if(arr[index].type === 'student'){
         this.props.history.push('/student');
    }
    else{
       this.props.history.push('/company');
    }

  }
  else{
      alert('try again');

  }
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
      hintText="user name"
      floatingLabelText="username"
      name="username"
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
