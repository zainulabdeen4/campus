import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';


class PostJobs extends Component {
    constructor(){
    super();

    this.save = this.save.bind(this);
    this.submitted = this.submitted.bind(this);
     this.state={
      title : '',
      salary: '',
      description:''
    }
}

save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}

submitted(){
    var uid = firebase.auth().currentUser.uid;
      firebase.database().ref('Job/').push({
      title:this.state.title,
      salary :this.state.salary,
      description:this.state.description,
      CompanyId:uid
     });
}

  render() {
     
    return(
        <div>
            <h1>post jobs</h1>
            <br />
            <TextField
            hintText="title"
            floatingLabelText="title"
            type="text"
            name="title"
            onChange={this.save}
        />
        <br />

        <TextField
            hintText="salary"
            floatingLabelText="salary"
            type="number"
            name="salary"
            onChange={this.save}
        />
        <br />
        <TextField
            hintText="description"
            floatingLabelText="description"
            type="text"
            name="description"
            onChange={this.save}
        />

        <br />
        <RaisedButton label="submit" primary={true} 
        onClick={this.submitted}/>
         
            
        </div>
    );

    

  }
}

export default PostJobs;
