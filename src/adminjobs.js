import React, { Component } from 'react';
import * as firebase from 'firebase';


class ViewJobs extends Component {

constructor(){
        super();
        //this.delete1 = this.delete1.bind(this);

        this.state={
            title : [],
            salary : [],
            description : [],
            key: []
        }
    }
    delete1(i,elem){
         var indexValue=this.state.key[i];
         debugger;
      firebase.database().ref('Job/'+ indexValue).remove();
      elem.target.parentNode.parentNode.remove();
      }


    componentDidMount(){

     var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
    speedRef.on('value',snap => {
  
   var userobj=snap.val();
   if (userobj === undefined || userobj === null){

   }
   else{
   var key=Object.keys(userobj);
      this.setState({key});
     var table1=document.getElementById('table1');
   for(var i=0; i<key.length; i++){
    var k=key[i];
   
     this.state.description[i]=userobj[k].description;
     this.state.salary[i]=userobj[k].salary;
     this.state.title[i]=userobj[k].title;

     var row1 = table1.insertRow(1);
     var col1 =row1.insertCell(0);
     var col2 =row1.insertCell(1);
     var col3 =row1.insertCell(2);
     var col4 =row1.insertCell(3);

     col1.innerText = this.state.title[i]
     col2.innerText = this.state.salary[i]
     col3.innerText = this.state.description[i]

     var button1 = document.createElement('button');
     col4.appendChild(button1);
     button1.innerText = 'delete';
     button1.addEventListener('click', this.delete1.bind(this,i));

}
}

}) 
}


  render() {
     
    return(
    <div>
            <h1> jobs </h1>
            <br />
        <table id="table1">
            <tr>
                <td>title </td>
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
