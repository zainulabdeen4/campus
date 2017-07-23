import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';

const style = {
  margin: 15,
};


class AddDetails extends Component {

constructor(){
    super();
    this.save = this.save.bind(this);
    this.UpdateStudent = this.UpdateStudent.bind(this);

    this.state={
      user:'',
      fullName:'',
      education:'',
      gpa:'',
      skills:''
   }
}
componentDidMount(){

   var userId=firebase.auth().currentUser.uid;
   const rootRef= firebase.database().ref();
    const userRef = rootRef.child('USER/'+ userId);
    var userobj;
     userRef.on('value',snap => {
      userobj=snap.val();
    
       this.setState({
         user:userobj
          
     })
     })
}


save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}
UpdateStudent(e){
    var userId=firebase.auth().currentUser.uid;
  firebase.database().ref('USER/'+ userId).set({
      ...this.state.user,
       
      name:this.state.fullName,
      education:this.state.education,
      GPA:this.state.gpa,
      skills:this.state.skills
     
     });

}

  render() {
     
    return(
        <div>
            <h1>add details</h1>
            <br />
            <TextField
             hintText="Enter your Full Name"
             floatingLabelText="Name"
             onChange = {this.save}
             name = 'fullName'
             />
           <br/>
           <TextField
             hintText="Enter your Education"
             floatingLabelText="Education"
             onChange = {this.save}
             name = 'education'
             />
           <br/>
           <TextField
             hintText="Enter your GPA"
             floatingLabelText="GPA"
             onChange = {this.save}
             name="gpa"
             />
           <br/>
             <TextField
             hintText="Enter your Skills"
             floatingLabelText="SKILL"
             onChange = {this.save}
             name="skills"
             />
           <br/>
           <RaisedButton label="Update" primary={true} style={style} onClick={this.UpdateStudent}/>

          <ul>
        </ul>
            
        </div>
    );

    

  }
}

export default AddDetails;