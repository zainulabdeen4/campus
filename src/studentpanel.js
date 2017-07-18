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
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
  height: 400,
  width: 260,
  display: 'inline-block',
   
};



class Student extends Component {
  constructor(){
    super();
    this.company = this.company.bind(this);
    this.jobs = this.jobs.bind(this);
    this.apply = this.apply.bind(this);
    this.getdata = this.getdata.bind(this);
    this.getjobs = this.getjobs.bind(this);
  }
  getdata(){
  let abc = JSON.parse(localStorage.getItem('student'))
  let arr = abc == null  ? [] : abc;
  return arr;
}

getjobs(){
  let abc = JSON.parse(localStorage.getItem('jobs'))
  let arr = abc == null  ? [] : abc;
  return arr;
  }

  company(e){
    
  var company=document.getElementById('companies');
  var jobs=document.getElementById('jobs');
  var apply=document.getElementById('apply');
  
   company.style.display = 'block';
    jobs.style.display = 'none';
    apply.style.display = 'none';    
    
        
      }
  
  jobs(e){
    
  var company=document.getElementById('companies');
  var jobs=document.getElementById('jobs');
  var apply=document.getElementById('apply');
   
   company.style.display = 'none';
    jobs.style.display = 'block';
  apply.style.display = 'none';      
     }

   apply(e){
    
  var company=document.getElementById('companies');
  var jobs=document.getElementById('jobs');
  var apply=document.getElementById('apply');
   
   company.style.display = 'none';
    jobs.style.display = 'none';
  apply.style.display = 'block';            }

  render() {
    var items = this.getdata().map((elem,i)=>{
      if(elem.type === 'company'){
        return <li key={i}><span>companyname : {elem.username}</span></li>
      }
    });

    var jobs = this.getjobs().map((elem,i)=>{
      
        return <li key={i}><span>title : {elem.title}</span><br /><span>salary : {elem.salary}</span>
            <br /><span>description : {elem.description}</span></li>
     
    });

    return (

      
      
      <MuiThemeProvider>
        <div>
        <div>
        <Toolbar />
        
        </div>
        <Paper style={style} zDepth={3} rounded={false} id="abc" >
    
        <div>
          <img src='image.png' height="150" width="225" alt = "panelImage"/>
          <br />
          <h1>Students</h1>
        </div>
        <div id="menu">
          <table>
            <tr>
            <td><RaisedButton label="view companies list" primary={true} onTouchTap	={this.company}  /></td></tr>

            <tr><td><RaisedButton label="view jobs list" primary={true} onTouchTap	={this.jobs} /></td> </tr>
            <tr><td><RaisedButton label="apply jobs" primary={true} onTouchTap	={this.apply} /></td></tr>
            </table>
          </div>
    
    
        </Paper>
        <div className="side" id='companies' ><h1>companies</h1>
        <ul>
          {items}
        </ul>
        </div>
        <div className="side" id='jobs' ><h1>jobs list</h1>
        <ul>
        {jobs}
        </ul>
          </div>
        <div className="side" id='apply' ><h1>apply</h1></div>
    
    </div>
    </MuiThemeProvider>
    
    );
  }
}

export default Student;
