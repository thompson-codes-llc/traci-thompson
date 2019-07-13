import React from 'react';
import Email from '../static/email.png';
import GitHub from '../static/github.png';
import LinkedIn from '../static/linkedin.png';

class ContactLinks extends React.Component {

render() {
  return(
    <div className="contact_links">
      <a href="mailto:traci@thompson.codes"><img class="contact_icon" src={Email} alt="email"/></a>
      <a href="https://github.com/Traci7822" target="_blank" rel="noopener noreferrer"><img class="contact_icon" src={GitHub} alt="github"/></a>
      <a href="https://www.linkedin.com/in/tracihthompson/" target="_blank" rel="noopener noreferrer"><img class="contact_icon" src={LinkedIn} alt="linkedin"/></a>
    </div>
  )};
}
export default ContactLinks