import React, { Component } from 'react'
import Applogo from '../Assests/Images/donatecart.png';
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                 <a className="navbar-brand" href="#/itemslist">
                    <img src={Applogo} width="auto" height="auto" className="d-inline-block align-top" alt=""/>
                 </a>
            </nav>
        )
    }
}
