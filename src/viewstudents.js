import React, { Component } from 'react';
import * as firebase from 'firebase';


class ViewStudents extends Component {

  constructor(){
    super();
    this.state={
      email:[],
      name:[]
    }

  }

  componentDidMount(){
   
   const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/');
      speedRef.on('value',snap => {
   var userobj=snap.val();
   var key=Object.keys(userobj);
   var table1 = document.getElementById('table1');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    if(userobj[k].type === "student"){
      this.state.email[i]=userobj[k].Email;
      this.state.name[i]=userobj[k].name;

      //console.log(this.state.email[i]); 
      //console.log(this.state.name[i]);  
      var row1 = table1.insertRow(1);
      var col1 = row1.insertCell(0);
      var col2 = row1.insertCell(1);
      col1.innerText = this.state.name[i];
      col2.innerText = this.state.email[i];
    }
    else{
    }
    
   
   }
   
}) 

  }



  render() {
    return(
        <div>
            <h1>View Students</h1>
          <br />
          <table id='table1'>
            <tr >
              <td>student name</td>
              <td>student email</td>
            </tr>
          </table>
            
        </div>
    );

    

  }
}

export default ViewStudents;
