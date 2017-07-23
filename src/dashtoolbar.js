import React, { Component } from 'react';
//import IconMenu from 'material-ui/IconMenu';
//import IconButton from 'material-ui/IconButton';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import FontIcon from 'material-ui/FontIcon';
//import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
//import MenuItem from 'material-ui/MenuItem';
//import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import './toolbar.css';
//import {Link} from 'react-router-dom';
import * as firebase from 'firebase';  


class Toolbar2 extends Component {
  constructor() {
   
    super();

     this.submitted=this.submitted.bind(this);

    this.state = {
      value: 3,
    };
  }
  

  //handleChange = (event, index, value) => this.setState({value});
 submitted(){
   firebase.auth().signOut().then(() => {
  this.props.history.push('/');    

}).catch(function(error) {
  console.log(error);
});



 }

  render() {
    return (
      <Toolbar>
        <span id="titl">Campus Recruitment System</span>
        <ToolbarGroup>
          
          
          <RaisedButton label="log out" primary={true} onClick={this.submitted}/> 
           
          &nbsp;   
      
                             
        </ToolbarGroup>
      
      </Toolbar>
    );
  }
} 

export default Toolbar2;