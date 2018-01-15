import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Projects extends Component {
    componentWillReceiveProps() {
        document.title = "Projects - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Projects - Jeremy Shaw";
    }

  render() {
    return (
        <div class="projects-page">
            <NavBar page="projects"/>

        </div>
    );
  }
}

export default Projects;