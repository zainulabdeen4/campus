import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Singup from './singup';
import Singin from './singin';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';
import Student from './studentpanel';
import Company from './companypanel';
import * as firebase from 'firebase';
import Admin from './admin'
//import Adminlog from './adminlog';


injectTapEventPlugin();

var config = {
    apiKey: "AIzaSyBu5pisq5BIxiiRYWhm49e1ZVDnNvuUCGE",
    authDomain: "campus-4640b.firebaseapp.com",
    databaseURL: "https://campus-4640b.firebaseio.com",
    projectId: "campus-4640b",
    storageBucket: "campus-4640b.appspot.com",
    messagingSenderId: "561185620968"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Route exact path='/' component={Singin} />
    <Route path='/singup' component={Singup} />
    <Route path='/student' component={Student} />
    <Route path='/company' component={Company} />
     <Route path='/admin' component={Admin} />
    </div>
    </BrowserRouter>    
    , document.getElementById('root'));
registerServiceWorker();
