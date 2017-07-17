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
import {Link} from 'react-router-dom';

class Toolbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }
  

  handleChange = (event, index, value) => this.setState({value});
 

  render() {
    return (
      <Toolbar>
        <span id="titl">Campus Recruitment System</span>
        <ToolbarGroup>
          
          <Link to="/">
          <RaisedButton label="log out" primary={true}/> </Link> 
          &nbsp;   
      
                             
        </ToolbarGroup>
      
      </Toolbar>
    );
  }
} 

export default Toolbar2;