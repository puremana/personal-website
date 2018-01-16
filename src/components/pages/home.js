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
            <div class="content-container first-color">
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
                
                </div>
                
            </div>
            <div class="content-container">
                <h3>Education</h3>
                <p>My relevant university courses</p>
                <div class="course-container">
                    <div class="level-block">
                        <h5>300 level</h5>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/papers/COMP314">COMP314 - Software Engineering Project</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP336">COMP336 – Graphics and Computer Games</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/papers/2017/COMP333">COMP333 – Web Applications Development</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/papers/COMP316">COMP316 - Artificial Intelligence Techniques and Applications</a>
                        </div>
                    </div>
                    <div class="level-block">
                        <h5>200 level</h5>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP235">COMP235 – Logic and Computation</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP233">COMP233 – Internet Applications</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP204">COMP204 – Object Orientated Program Design</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/papers/2017/COMP202">COMP202 – Computer Communications</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP200">COMP200 – Computer Systems</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP203">COMP203 – Programming with Data Structures</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP224">COMP224 – Visual Design for Interactive Media</a>
                        </div>
                    </div>
                    <div class="level-block">
                        <h5>100 level</h5>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP103">COMP103 – Introduction to Computer Science 1</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP104">COMP104 – Introduction to Computer Science 2</a>
                        </div>
                        <div class="course">
                            <a href="https://papers.waikato.ac.nz/2017/COMP/COMP126">COMP126 – Computing Media</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;