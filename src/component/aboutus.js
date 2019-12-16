import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class aboutus extends Component {
    render() {
        return (
            <div id="aboutus" style={{ padding: '5vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <h1> About Us </h1>
            <Typography component="p">
              We understand how important it is to have complete transparency about our test creation methods, <br />
              especially since we work with educational non-profit organisations, like schools and libraries.<br />
              Our team of professional writers actually takes the time to look at each state’s driver’s licence manual. <br />
              A test is then created using the information directly from the manual.<br />
              <br/>
              Once a practice test is ready, we triple-check each test before uploading it, <br/>
              to ensure the fewest errors possible. Additionally, once available publically, <br/>
              each question has a button for reporting any issues, and we encourage and appreciate feedback <br/>
              from test-takers, teachers, parents, librarians, or any other parties interested in driver safety. <br/>
              We’re always happy to open a dialogue and correct any concern in a timely manner.<br/>
              <br/>
              We understand how important accuracy is, since we base our tests on driver’s licence manuals, <br/>
              so when manuals are updated, our questions get updated as well. We constantly monitor government websites <br/>
              for every state, and make certain that any test questions affected by a manual’s update are immediately updated on <br/>
              our site, too. We also update the free electronic copy of the state’s driver’s licence manuals on our site, <br/>
              normally within a few days after the official source.<br/>
            </Typography>
          </div>
        )
    }
}
