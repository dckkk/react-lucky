import React, { Component } from 'react';

import reactLogo from './assets/React-icon.png';

import { loginUser } from './actions/login';

import App from './App';
import { render } from './index';


class Login extends Component {
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = document.getElementById("username").value
    , password = document.getElementById("password").value
    , role = document.getElementById("role").value
    , data = {
      "username": username,
      "password": password,
      "role": role
    }

    if (username == "" || username == null) { alert ("Username tidak boleh kosong !"); return false;}
    if (password == "" || password == null) { alert ("Password tidak boleh kosong !"); return false;}

    let tryLogin = loginUser(data);

    if (tryLogin == 200) {
      render(App)
    } else {
      alert("Username / Password salah !");
    }

  }

  render() {
    return (
      <div className="container center">
        <img className="container_image" alt="react logo" src={reactLogo} />
        <h2>Sign In to Apps</h2>
        <div className="panel-body">
          <label>Username</label>
          <input type="text" id="username" name="username" className="form-control" placeholder="Username"/>
          <label>Password</label>
          <input type="password" id="password" name="password" className="form-control" placeholder="Password"/>
          <label>Role</label>
          <select id="role" name="role" className="form-control">
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
          <button className="btn-login" onClick={this.handleSubmit}>
            Sign in
          </button>
        </div>
      </div>
    )
  }

}


export default Login;
