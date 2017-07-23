import React, { Component } from 'react';
import Toolbar2 from './dashtoolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Tabs1 from './tab';
import './studentpanel1.css';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ViewCompany from './admincompany';
import ViewJobs from './adminjobs';
import Students from './adminstudents';



const style = {
  height: 450,
  width: 320,
  display: 'inline-block',
   
};



class Admin extends Component {
  
  

  

  render() {


    return (

       <MuiThemeProvider>
       
        <BrowserRouter >
        <div>
        <div>
        <Toolbar2 {...this.props} />
        
        </div>
        <Paper style={style} zDepth={3} rounded={false} id="abc" >
    
        <div>
          <img src='image.png' height="150" width="225" alt = "panelImage"/>
          <br />
          <h1>Admin</h1>
        </div>
        <div id="menu">
          <table>

            <tr><td><Link to="/admin/students"><RaisedButton label="view students" primary={true} /></Link></td> </tr>
            <tr>
            <td><Link to='/admin/viewcompany'><RaisedButton label="view companies" primary={true}   /> </Link></td></tr>

            <tr><td><Link to='/admin/viewjobs'><RaisedButton label="view jobs list" primary={true}  /></Link></td> </tr>
            </table>
          </div>
    
    
        </Paper>
        
        <div className = 'side'>
          <Route path="/admin/students" component={Students}/>
            <Route path='/admin/viewcompany' component={ViewCompany}/>
            <Route path='/admin/viewjobs' component={ViewJobs}/>
        </div>

    </div>
     </ BrowserRouter >
       
    </MuiThemeProvider>
 
    );
  }
}

export default Admin;
