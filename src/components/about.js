import React from 'react';
import ContactLinks from './contactlinks';

class About extends React.Component {

render() {
  return(
    <div className="about">
      <p>My unique background helps me to view software development through a creative lens. </p>
      <p>I come from an upbrining immersed in visual arts, years spent learning and working in the culinary arts,
        and continued education in multiple areas with a focus towards Public Health and federal grant work.</p>

      <p>As a Full Stack Developer I can provide custom services depending upon your needs. Please contact me using
        any of the methods below if you would like to discuss a potential project.</p>
      <img src="../static/arrows.png" />
      <br />
      <div id="contact_links">
        <ContactLinks />
      </div>
      <div>
        <img src="../static/arrows.png" />
      </div>
      <div>
        <h3>Media & Publications</h3>
        <a href="https://www.thewomenofdenver.com/articles/becoming-a-software-developer-traci-thompson" target="_blank">Women Of Denver: Becoming a Software Developer</a>
        <br />
        <a href="https://medium.com/@TraciThompson/bubble-sort-the-gateway-algorithm-52f015fb37a7" target="_blank">Bubble Sort: The gateway algorithm</a>
        <br />
        <a href="https://medium.com/@TraciThompson/http-request-to-rails-db-angular-views-b742f3eca71b" target="_blank">HTTP request to Rails DB & Angular Views</a>
        <br />
        <a href="https://medium.com/@TraciThompson/continuously-looping-non-sequential-arrays-on-click-with-jquery-and-ruby-on-rails-3a80d5e9abae" target="_blank">Looping non-sequential arrays with jQuery & Ruby on Rails</a>
        <br />
        <a href="https://medium.com/@TraciThompson/why-i-decided-to-learn-software-development-d8dadaa3360a" target="_blank">Why I decided to learn software development</a>
      </div>
      <style jsx>{`
        .about {
          color: white;
          font-family: 'Cinzel', serif;
          width: 80%;
          font-size: 2em;
          margin-top: 3%;
        }
      `}</style>
    </div>
  )};
}
export default About