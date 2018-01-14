import React, { Component } from 'react';

//components  
import {
    Link
  } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {homeLink: 'is-active', projectLink: '', contactLink: ''};
    }

  render() {
    return (
        <div class="tabs is-toggle is-fullwidth">
            <ul>
                <li class={this.state.homeLink}>
                    <a>
                        <span class="icon is-small"><i class="fa fa-home"></i></span>
                        <span>Home</span>
                    </a>
                </li>
                <li class={this.state.projectLink}>
                    <a>
                        <span class="icon is-small"><i class="fa fa-laptop"></i></span>
                        <span>Projects</span>
                    </a>
                </li>
                <li class={this.state.contactLink}>
                    <a>
                        <span class="icon is-small"><i class="fa fa-phone"></i></span>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    );
  }
}

export default NavBar;