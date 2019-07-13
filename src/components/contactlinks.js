import React from 'react';

class ContactLinks extends React.Component {

render() {
  return(
    <div className="contact_links">
      <a href="mailto:traci@thompson.codes"><img src="../static/email.png" alt="email"/></a>
      <a href="https://github.com/Traci7822" target="_blank" rel="noopener noreferrer"><img src="../static/github.png" alt="github"/></a>
      <a href="https://www.linkedin.com/in/tracihthompson/" target="_blank" rel="noopener noreferrer"><img src="../static/linkedin.png" alt="linkedin"/></a>
    </div>
  )};
}
export default ContactLinks