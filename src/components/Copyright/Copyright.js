import React, { Component } from 'react';
import panacloudlogo from '../../assets/logos/panacloud-logo.png';
// import panacloudlogo from '../../';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/home.css';



class Copyright extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="copyright">
          <p>© 2018 PIAIC. All rights reserved.</p>
          <div>
              <a href="https://www.panacloud.ai/" target="_blank" rel="noopener noreferrer"><img alt="panacloudlogo" src={panacloudlogo} height="60px" /></a>
          </div>
        </div>
         );
    }
}
 
export default Copyright;