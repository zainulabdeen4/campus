import React, { Component } from 'react';
import * as firebase from 'firebase';


class ViewCompany extends Component {

  constructor(){
    super();
    this.state={
      email:[],
      name:[]
    }

  }

  componentDidMount(){
   
   const rootRef = firebase.database().ref();
   const speedRef = rootRef.child('USER/');
   speedRef.on('value',snap => {
   var userobj=snap.val();
   var key=Object.keys(userobj);
   var table1 = document.getElementById('table1');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    if(userobj[k].type === "company"){
      this.state.email[i]=userobj[k].Email;
      this.state.name[i]=userobj[k].name;
      var row = table1.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerText = this.state.name[i];
      cell2.innerText = this.state.email[i];
      //console.log(this.state.email[i]); 
      //console.log(this.state.name[i]);  
    }
    else{
    }
    
   
   }
   
}) 

  }
 
    

  render() {
    return(
        <div>
            <h1>companies</h1>
        <table id='table1'>
          <tr>
            <td> company name</td>
            <td>company email</td>
          </tr>

        </table>

        </div>
    );

    

  }
}

export default ViewCompany;