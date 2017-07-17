import React from 'react';
//import {Tabs, Tab} from 'material-ui/Tabs'


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Tabs1 extends React.Component {

  render() {
    return (

      <div class="container">
      <div class="col-lg-6">
        <div class="row section activesec" id="img1">
          <div class="col-lg-2">
            <span class="glyphicon glyphicon-earphone activeglyph" id="glyph1"></span>
          </div>
          <div class="col-lg-10">
            <h2>Skype to Skype Calls</h2>
            <p>Video or voice call anyone in the world, for free. <a href="#">Find out how Skype calls bring you closer, even in a group.</a></p>
          </div>
        </div>
        <div class="row section" id="img2">
          <div class="col-lg-2">
          <span class="glyphicon glyphicon-user" id="glyph2"></span>
          </div>
          <div class="col-lg-10">
            <h2>Group video calls</h2>
            <p>Bring family and friends together on a free group video call. <a href="#">See how it works on mobile, tablet and computer.</a></p>
          </div>
        </div>
        <div class="row section" id="img3">
          <div class="col-lg-2">
          <span class="glyphicon glyphicon-comment" id="glyph3"></span>
          </div>
          <div class="col-lg-10">
            <h2>Instant messaging</h2>
            <p>Share messages with your partner, or make plans with group of a friends. <a href="#">Check out our new emoticons and Mojis too.</a></p>
          </div>
        </div>
        <div class="row section" id="img4">
          <div class="col-lg-2">
          <span class="glyphicon glyphicon-phone-alt" id="glyph4"></span>
          </div>
          <div class="col-lg-10">
            <h2>Call phone numbers</h2>
            <p>See how easy it is to reach local businesses or friends who arent online. <a href="#">Call mobile and landline numbers at affordable rates.</a></p>
          </div>
        </div>
        <div class="row section" id="img5">
          <div class="col-lg-2">
          <span class="glyphicon glyphicon-new-window" id="glyph5"></span>
          </div>
          <div class="col-lg-10">
            <h2>Screen sharing</h2>
            <p id="test">Give great presentations online or show grandma how easy it is to use Skype. <a href="#">Discover new ways to collaborate with screen sharing.</a></p>
          </div>
       </ div>
      </div>


      <div class="col-lg-6 rimg">
        <img id="rightimg1" class="activeimg" src="img/1.jpg"></img>
        <img id="rightimg2" src="img/2.jpg"></img>
        <img id="rightimg3" src="img/3.jpg"></img>
        <img id="rightimg4" src="img/4.jpg"></img>
        <img id="rightimg5" src="img/5.jpg"></img>
      </div>
    </div>

    );
  }
}