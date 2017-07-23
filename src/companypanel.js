import React, { Component } from 'react';
import Toolbar2 from './dashtoolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Tabs1 from './tab';
import './studentpanel1.css';
import { BrowserRouter, Route , Link } from 'react-router-dom';
//import './page.css';
//import Paper from 'material-ui/Paper';
//import TextField from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ViewCandidates from './viewcandidates';
import PostJobs from './postjobs';
import ViewStudents from './viewstudents';
import MyJobs from './myjobs';
//import * as firebase from 'firebase';



const style = {
  height: 450,
  width: 260,
  display: 'inline-block',
   
};



class Company extends Component {
  render() {
      

    return (
      
      <BrowserRouter>
      <MuiThemeProvider>
        <div>
        <div>
        <Toolbar2 {...this.props} />
        
        </div>
        <Paper style={style} zDepth={3} rounded={false} id="abc" >
    
        <div>
          <img src='image.png' height="150" width="225" alt = "panelImage" />
          <br />
          <h1>company</h1>
        </div>
        <div id="menu">
          <table>
            <tr><td><Link to='/company/students'><RaisedButton label="view students" primary={true}   /> </Link></td></tr>

            <tr><td><Link to='/company/postjobs'><RaisedButton label="post jobs" primary={true}  /></Link></td> </tr>
            <tr><td><Link to='/company/myjobs'><RaisedButton label="jobs posted" primary={true}  /></Link></td> </tr>
            <tr><td><Link to='/company/viewcandidates'><RaisedButton label="view candidates" primary={true}  /></Link></td></tr>
            </table>
          </div>
    
    
        </Paper>
        <div className="side">
          <Route path="/company/students" component={ViewStudents}/>
          <Route path="/company/postjobs" component={PostJobs}/>
          <Route path="/company/myjobs" component={MyJobs}/>
          <Route path="/company/viewcandidates" component={ViewCandidates}/>

        </div>
    
    </div>
    </MuiThemeProvider>
    </ BrowserRouter>
    );
  }
}

export default Company;
