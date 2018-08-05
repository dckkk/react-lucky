import React, { Component } from 'react';

import App from '../App';
import { render } from '../index'

import profile from '../assets/profile.png';

import { logoutUser } from '../actions/login'

class Navbar extends Component {
  constructor () {
    super();
    this.state = {
        "username": "",
        "role": "",
        "showMenu": false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    var username = sessionStorage.getItem("username") ? sessionStorage.getItem("username") : "Unknown"
    , role = sessionStorage.getItem("role") ? sessionStorage.getItem("role") : "-"
    
    this.setState({
        "username": username,
        "role": role
    })
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  handleLogout() {
    let logout = logoutUser();
    if (logout == 200) {
        window.location.reload();
    }
  }

  render() {
    return (
        <div>
            <nav className="navbar">
                <span className="navbar-title">Admin Page</span>
                <span className="navbar-profile" onClick={this.showMenu}>
                    <img className="navbar-profile-img" alt="react logo" src={profile} />
                    <span className="navbar-profile-identity-name">
                    <p className="navbar-profile-identity-name">{this.state.username}</p>
                    </span>
                </span>
                {
                    this.state.showMenu
                        ? (
                        <div
                            className="dropdown-menu"
                            ref={(element) => {
                            this.dropdownMenu = element;
                            }}
                        >
                            <span className="dropdown-role">{this.state.role}</span> 
                            <hr/>
                            <button className="dropdown-button" onClick={this.handleLogout}>Logout</button>
                        </div>
                        )
                        : (
                        null
                        )
                }
            </nav>
        </div>
    )
  }

}


export default Navbar;
