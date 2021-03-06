import React, { Component } from 'react';
import Toolbar2 from './dashtoolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Tabs1 from './tab';
import './studentpanel1.css';
import { BrowserRouter, Route , Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ViewCompany from './viewcompany';
import ViewJobs from './viewjobs';
import AddDetails from './adddetails';
import Singin from './singin';



const style = {
  height: 450,
  width: 320,
  display: 'inline-block',
   
};



class Student extends Component {
  
  

  

  render() {


    return (

       <MuiThemeProvider>
       
        <BrowserRouter >
        <div>
        <div>
        <Toolbar2 {...this.props}/>
        
        </div>
        <Paper style={style} zDepth={3} rounded={false} id="abc" >
    
        <div>
          <img src='image.png' height="150" width="225" alt = "panelImage"/>
          <br />
          <h1>Students</h1>
        </div>
        <div id="menu">
          <table>

            <tr><td><Link to="/student/studentdetails"><RaisedButton label="add details" primary={true} /></Link></td> </tr>
            <tr>
            <td><Link to='/student/viewcompany'><RaisedButton label="view companies list" primary={true}   /> </Link></td></tr>

            <tr><td><Link to='/student/viewjobs'><RaisedButton label="view jobs list" primary={true}  /></Link></td> </tr>
            </table>
          </div>
    
    
        </Paper>
        
        <div className = 'side'>
          <Route path="/student/studentdetails" component={AddDetails}/>
            <Route path='/student/viewcompany' component={ViewCompany}/>
            <Route path='/student/viewjobs' component={ViewJobs}/>
            <Route exact path='/' component={Singin} />
        </div>

    </div>
     </ BrowserRouter >
       
    </MuiThemeProvider>
 
    );
  }
}

export default Student;
