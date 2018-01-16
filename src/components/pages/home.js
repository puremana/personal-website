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
            <div class="content-container">
                <div class="left-container">
                    <div class="header-container">
                        <h3>About</h3>
                        <hr class="header-hr" />
                    </div>
                    <p>I'm Jeremy. A computer science student intent on developing the sweetest <Link to="/projects">projects</Link> I can. 
                    Currently studying at Waikato with one semester left. Interesting in developing webapps and fullstack development.</p>
                    <p>When I'm not programming you can find me in the gym, going for a run or binge watching the latest TV Shows.</p>
                    <p>If you are interested in hiring me, or just want to tell me about a movie I should watch, feel free to <Link to="/contact">drop me a line</Link>.</p>
                </div>
                <div class="right-container">
                aasd
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