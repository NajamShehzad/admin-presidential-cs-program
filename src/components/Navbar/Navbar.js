/*eslint-disable*/
import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/logos/piaic-white.svg';
import { Link } from 'react-router-dom';
// import withRouter from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropMenu from '../../assets/svgs/drop-down-arrow.svg'


class Navbar extends Component {
    state = { 
        condition:false,
        ai : false,
        cn : false,
        about : false,
        bc : false,
        subs : false,
        apply : false,
        hiw : false
       }
  
  
    render() { 

        return ( 
            <div className="navbar">
                Hello Nav Bar
            </div>
         );
    }
}
 
// export default withRouter(Navbar);
export default Navbar;