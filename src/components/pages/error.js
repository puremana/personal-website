import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Error extends Component {
    componentWillReceiveProps() {
        document.title = "404 - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "404 - Jeremy Shaw";
    }

  render() {
    return (
        <div class="error-page">
            <NavBar />
            <div class="fourzero-page">
                <h2>404 Error</h2>
                <h4>Page not found. Were you looking for <Link to="/" className="colored-link">About</Link>?</h4>
            </div>
        </div>
    );
  }
}

export default Error;