import React from 'react';
import '../css/navlinks.css';

class NavLinks extends React.Component {

render() {
  return(
    <div className="navlinks">
      <a href="#home" onClick={this.props.handleClick.bind(this, "Home")} >Home</a>
      | <a href="#resume" onClick={this.props.handleClick.bind(this, "Resume")} >Resume</a>
      | <a href="#about" onClick={this.props.handleClick.bind(this, "About")} >About Me</a>
    </div>
  )};
}
export default NavLinks