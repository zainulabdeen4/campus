import React, { Component } from 'react';
import Toolbar from './dashtoolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Tabs1 from './tab';
import './studentpanel1.css';

//import './page.css';
//import Paper from 'material-ui/Paper';
//import TextField from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
  height: 400,
  width: 260,
  display: 'inline-block',
   
};



class Company extends Component {
  constructor(){
    super();

    this.students = this.students.bind(this);
    this.jobs = this.jobs.bind(this);
    this.candidates = this.candidates.bind(this);
    this.getdata = this.getdata.bind(this);

    this.save = this.save.bind(this);
    this.submitted = this.submitted.bind(this);

    this.state={
      title : '',
      salary: '',
      description:''
    }
  }

getdata(){
  let abc = JSON.parse(localStorage.getItem('student'))
  let arr = abc == null  ? [] : abc;
  return arr;
  }
  students(e){
    
  var students=document.getElementById('students');
  var jobs=document.getElementById('jobs');
  var canditates=document.getElementById('candidates');
   
   students.style.display = 'block';
    jobs.style.display = 'none';
  canditates.style.display = 'none';        }
  
  jobs(e){
    
  var students=document.getElementById('students');
  var jobs=document.getElementById('jobs');
  var canditates=document.getElementById('candidates');

   students.style.display = 'none';
    jobs.style.display = 'block';
  canditates.style.display = 'none';           }

   candidates(e){
    
  var students=document.getElementById('students');
  var jobs=document.getElementById('jobs');
  var canditates=document.getElementById('candidates');

   students.style.display = 'none';
    jobs.style.display = 'none';
  canditates.style.display = 'block';            }

  submitted(e){
  let abc = JSON.parse(localStorage.getItem('jobs'))
  let arr = abc == null  ? [] : abc;
  arr.push(this.state);
  localStorage.setItem('jobs',JSON.stringify(arr)); 
}
save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}

  render() {
      var items=this.getdata().map((elem,i)=>{
      if(elem.type === 'student'){
        return <li key={i}><span>student name : {elem.username}</span></li>
      }
    });

    return (
      
      <MuiThemeProvider>
        <div>
        <div>
        <Toolbar />
        
        </div>
        <Paper style={style} zDepth={3} rounded={false} id="abc" >
    
        <div>
          <img src='image.png' height="150" width="225" alt = "panelImage" />
          <br />
          <h1>company</h1>
        </div>
        <div id="menu">
          <table>
            <tr>
            <td><RaisedButton label="view students" primary={true} onTouchTap	={this.students}  /></td></tr>

            <tr><td><RaisedButton label="post jobs" primary={true} onTouchTap	={this.jobs} /></td> </tr>
            <tr><td><RaisedButton label="candidates list" primary={true} onTouchTap	={this.candidates} /></td></tr>
            </table>
          </div>
    
    
        </Paper>
        <div className="side" id='students' >
            <h1>students list</h1>
            <br />
            <ul>
                {items}
            </ul>
        </div>
        <div className="side" id='jobs' ><h1>post jobs</h1>
        <TextField
            hintText="title"
            floatingLabelText="title"
            type="text"
            name="title"
            onChange={this.save}
        />
        <br />

        <TextField
            hintText="salary"
            floatingLabelText="salary"
            type="number"
            name="salary"
            onChange={this.save}
        />
        <br />
        <TextField
            hintText="description"
            floatingLabelText="description"
            type="text"
            name="description"
            onChange={this.save}
        />

        <br />
        <RaisedButton label="submit" primary={true} 
        onClick={this.submitted} />
        </div>
        <div className="side" id='candidates' ><h1>apply</h1></div>
    
    </div>
    </MuiThemeProvider>
    
    );
  }
}

export default Company;
