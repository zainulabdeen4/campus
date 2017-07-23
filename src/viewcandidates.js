import React, { Component } from 'react';
import * as firebase from 'firebase';


class ViewCandidates extends Component {
  constructor(){
    super();
    this.state={
      title : [],
      email : [],
      name : []

    }
  }

  componentWillMount(){

     var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
   
    speedRef.on('value',snap => {
  
   var userobj=snap.val();
   if (userobj === undefined || userobj === null){

   }
   else{
   var key=Object.keys(userobj);
      //this.setState({key});
     
   for(var i=0; i<key.length; i++){
    var k=key[i];
    
   
    if(uid === userobj[k].CompanyId){
      
     const candiref = rootRef.child("Job/"+ k + "/Apply/")
     debugger;
      candiref.on('value',snap=>{
        var candiobj = snap.val();
        if (candiobj === undefined || candiobj === null){

   }
   else{
     debugger;
     var key1 = Object.keys(candiobj);
     var table1=document.getElementById('table1');
     for(var i=0;i<key1.length;i++){
       var k1 =key1[i];
       this.state.title[i] = userobj[k].title; 
       this.state.name[i]=candiobj[k1].name;
       this.state.email[i] = candiobj[k1].Email;
       var row1 = table1.insertRow(1);
     var col1 =row1.insertCell(0);
     var col2 =row1.insertCell(1);
     var col3 =row1.insertCell(2);
     col1.innerText = this.state.name[i]
     col2.innerText = this.state.email[i]
     col3.innerText = this.state.title[i]


     }

   }

      })
   
     
}
}
}

}) 
}
  render() {
     
    return(
        <div>
            <h1>view candidates</h1>
         <table id="table1">
           <tr>
             <td>name</td>
             <td>email</td>
             
             <td>title</td>
             </tr>
           </table>
            
        </div>
    );

    

  }
}

export default ViewCandidates;
