import React, { Component } from 'react';
import * as firebase from 'firebase';


class ViewCompany extends Component {

constructor(){
        super();
        this.state={
            email :[],
            name : [],
            key : []
        }

    }

    delete1(i,elem){
         var indexValue=this.state.key[i];
      firebase.database().ref('USER/'+ indexValue).remove();
      elem.target.parentNode.parentNode.remove();
      }

    componentWillMount(){
   
   const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/');
      speedRef.on('value',snap => {
   var userobj=snap.val();
   var key=Object.keys(userobj);
   this.setState({key});
   var table1 = document.getElementById('table1');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    if(userobj[k].type === 'company'){
      this.state.email[i]=userobj[k].Email;
      this.state.name[i]=userobj[k].name;

      //console.log(this.state.email[i]); 
      //console.log(this.state.name[i]);  
      var row1 = table1.insertRow(1);
      var col1 = row1.insertCell(0);
      var col2 = row1.insertCell(1);
      var col3 = row1.insertCell(2);

      col1.innerText = this.state.name[i];
      col2.innerText = this.state.email[i];
      var button1 = document.createElement('button');
     col3.appendChild(button1);
     button1.innerText = 'delete';
     button1.addEventListener('click', this.delete1.bind(this,i));
    }
    else{
    }
    
   
   }
   
}) 

  }



  render() {
    return(
        <div>
            <h1>company</h1>
            <br />
            <table id="table1">
            <tr>
                <td>company name </td>
                <td>company Email</td>
                <td></td>
            </tr>    
            </table>
            
        </div>
    );

    

  }
}



export default ViewCompany;
