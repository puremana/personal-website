import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Contact extends Component {
    componentWillReceiveProps() {
        document.title = "Contact - Jeremy Shaw";
    }

    componentDidMount() {
        document.title = "Contact - Jeremy Shaw";
    }

  render() {
    return (
        <div class="contact-page">
            <NavBar page="contact"/>
            <div class="contact-container">
            <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input" />
            </div>
            </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
            </div>
            </div>

            <div class="field">
            <label class="label">Subject</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
                </div>
            </div>
            </div>

            <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
            </div>

            <div class="control">
                <button class="button is-link">Send Message</button>
            </div>
            </div>
        </div>
    );
  }
}

export default Contact;