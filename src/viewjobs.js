import React, { Component } from 'react';
import * as firebase from 'firebase';


class ViewJobs extends Component {
  constructor(){
    super();
    this.state={
        companyId:[],
        description:[],
        salary:[],
        title:[],
        key:[]
    }
  }
  apply1(index,elem){
     var currentUser= firebase.auth().currentUser;
      var currentId= firebase.auth().currentUser.uid;
        var rootRef=firebase.database().ref();
        const speedRef = rootRef.child("USER/"+currentId);
     speedRef.on("value",snap=>{
           var values= snap.val();
         let obj=(snap.val() || {
             name: values.name,
             email: values.Email,
             UserId:currentId

         });
      var rootRef=firebase.database().ref();
      const speedRef=rootRef.child("Job/"+this.state.key[index]+"/Apply/"+currentId).set(obj);
      elem.target.parentNode.parentNode.remove();
      
          
     })

}

    componentDidMount(){
   //var currentUserEmail=  firebase.auth().currentUser.email
    //var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
      speedRef.on('value',snap => {
    
  //var uid=firebase.auth().currentUser.email;
    var userobj=snap.val();
   var key=Object.keys(userobj);
   this.setState({key})
   var table1 = document.getElementById('table1');
   for(var i=0; i<key.length;i++){
    var k=key[i];
     this.state.companyId[i]=userobj[k].CompanyId;
     this.state.description[i]=userobj[k].description;
     this.state.salary[i]=userobj[k].salary;
      this.state.title[i]=userobj[k].title;  

    var table = document.getElementById("myTable");
    var row = table1.insertRow(1);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    col1.innerText = this.state.title[i];
    col2.innerText = this.state.salary[i];
    col3.innerText = this.state.description[i];
     var button1 = document.createElement('button');
     col4.appendChild(button1);
     button1.innerText = 'apply';
     button1.addEventListener('click', this.apply1.bind(this,i));
    
 }
       
}) 

}
  


  render() {
     
    return(
        <div>
            <h1>view jobs</h1>
         <table id='table1'>
          
          <tr>
            <td>title</td>
            <td>salary</td>
            <td>description</td>
            <td></td>
          </tr>
          </table>  
        </div>
    );

    

  }
}

export default ViewJobs;
