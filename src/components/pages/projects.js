import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

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
                            <div class="tag html">HTML5</div>
                            <div class="tag css">CSS</div>
                            <div class="tag js">JS</div>
                            <div class="tag boostrap">Bootstrap</div>
                            <div class="tag react">React JS</div>
                            <div class="tag nodejs">Node JS</div>
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
                        <div class="figure-container ">
                            <figure>
                                <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                                <figcaption><a href=""></a></figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="right-project">
                        <div class="title-container">
                            <h3>IOU Helper / IOU Helper Pro</h3>
                        </div>
                        <p>IOU Helper is a wrapper for the popular online game IOURPG. IOU Helper allows users to log into multiple kongregate and IOURPG.com accounts on a desktop application. This uses allows the user to run the game with less CPU and GPU usage. It also provides features such as auto-login, screenshotting, timers, auto clicking and macros to get the best possible experience out of the game. The IOU Helper Pro edition used SharpPcap to read packets from the game to collect data and display this on screen to provide the user with optimal game paths. This project was completed using C# in Visual Studio with Winforms.</p>
                        <p>This program is still actively updated and currently used by over 200 players.</p>
                        <div class="tag-container">
                            <div class="tag winforms">Winforms</div>
                            <div class="tag c-sharp">C#</div>
                            <div class="tag pcap">SharpPcap</div>
                        </div>
                    </div>
                </div>
                <div class="project one">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>IOU Helper 2.0</h3>
                        </div>
                        <p>While IOU Helper v1.0 allowed for low CPU and GPU usage while running multiple accounts, I wanted to create fast, responsive and attractive client for people who didn't worry about hardware usage. This is why I created IOU Helper 2.0. IOU Helper 2.0 was created in <a href="https://electronjs.org/" target="_blank" rel="noopener noreferrer">Electron</a> using NodeJS, HTML5 and CSS.</p>
                        <p>Electron combines web development with building cross platform desktop apps.</p>
                        <p>This program is currently used by over 50 players.</p>
                        <div class="tag-container">
                            <div class="tag html">HTML5</div>
                            <div class="tag css">CSS</div>
                            <div class="tag js">JS</div>
                            <div class="tag sem-ui">Semantic UI</div>
                            <div class="tag nodejs">Node JS</div>
                            <div class="tag electron">Electron</div>
                        </div>
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
                        <div class="figure-container ">
                            <figure>
                                <img src="./images/project/iou-helper.jpg" alt="Eiffel tower" />
                                <figcaption><a href=""></a></figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="right-project">
                        <div class="title-container">
                        <h3>IOU Bot</h3>
                        </div>
                        <p>IOU Bot is a Discord bot made for the official IOURPG game Discord server. This was my first time
                            developing using the Discord JS API, which I found quite enjoyable.
                        </p>
                        <p>The picture on the left displays all of the current commands as of 19/1/2018. The bots noteable features include adding
                            custom commands, advertising parties and guilds by adding them to a locally stored database which is private messaged to 
                            interested members when requested, polling commands with many options such as how many votes a single player has, and a 
                            scheduler which pings members with the <i>bingo</i> role 10 minutes prior to the in-game bingo. This is to prevent players 
                            from forgetting to sign up for bingo.
                        </p>
                        <div class="tag-container">
                            <div class="tag nodejs">Node JS</div>
                            <div class="tag discord">Discord JS</div>
                            <div class="tag json">JSON</div>
                        </div>
                    </div>
                </div>
                <div class="project one">
                    <div class="left-project">
                        <div class="title-container">
                            <h3>Waikato Police Notification System</h3>
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
                <p>You can also view some websites I made for univeristy, <a href="asd" target="_blank" rel="noreferrer noopener">here</a>.</p>
            </div>
        </div>
    );
  }
}

export default Projects;