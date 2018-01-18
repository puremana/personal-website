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
            <div class="projects-container">
                <div class="project one">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>IOURPG.com Game Portal</h3>
                        </div>
                        <p>IOURPG.com is a website I designed and developed to bring together all of the elements of the Idle Online Universe game while 
                        maintaining a simple and professional look.</p>
                        <div class="tag-container">
                            <div class="tag">HTML5</div>
                            <div class="tag">CSS</div>
                            <div class="tag">JS</div>
                            <div class="tag">React</div>
                            <div class="tag">Node.js</div>
                        </div>
                    </div>
                    <div class="right-project">
                        <div class="figure-container">
                        <figure>
                            <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                            <figcaption><a href="https://iourpg.com/">https://iourpg.com/</a></figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
                <div class="project two">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>IOU Helper / IOU Helper Pro</h3>
                            <hr />
                        </div>
                        <p></p>
                    </div>
                    <div class="right-project">
                        <div class="figure-container ">
                        <figure>
                            <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                            <figcaption><a href=""></a></figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
                <div class="project one">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>IOU Helper 2.0</h3>
                            <hr />
                        </div>
                        <p></p>
                    </div>
                    <div class="right-project">
                        <div class="figure-container ">
                        <figure>
                            <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                            <figcaption><a href=""></a></figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
                <div class="project two">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>IOU Bot</h3>
                            <hr />
                        </div>
                        <p></p>
                    </div>
                    <div class="right-project">
                        <div class="figure-container ">
                        <figure>
                            <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                            <figcaption><a href=""></a></figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
                <div class="project one">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>asd</h3>
                            <hr />
                        </div>
                        <p></p>
                    </div>
                    <div class="right-project">
                        <div class="figure-container ">
                        <figure>
                            <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                            <figcaption><a href=""></a></figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
                <p>You can also view some websites I made for univeristy, <a href="" target="_blank">here</a>.</p>
            </div>
        </div>
    );
  }
}

export default Projects;