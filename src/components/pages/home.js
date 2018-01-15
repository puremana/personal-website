import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Home - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Home - Jeremy Shaw";
    }

  render() {
    return (
        <div class="home-page">
            <NavBar page="home"/>
            <div class="header">
                <h2>Jeremy Shaw Portfolio</h2>
                <a class="button is-info is-large for-hire-button">
                    For Hire
                </a>
            </div>
            <div class="content-container cyan">
                <div class="left-container">
                    <h3>About</h3>
                    <p></p>
                </div>
                <div class="right-container">

                </div>
                
            </div>
            <div class="content-container">
                <h3>Education</h3>
                <p>My relevant university courses</p>
                <div class="course-container">
                    <div class="course">
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;