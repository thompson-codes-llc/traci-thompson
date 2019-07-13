import React from 'react';

class NavLinks extends React.Component {

render() {
  return(
    <div className="navlinks">
      <a href="#home" onClick={this.props.handleClick.bind(this, "Home")} >Home</a>
      | <a href="#resume" onClick={this.props.handleClick.bind(this, "Resume")} >Resume</a>
      | <a href="#about" onClick={this.props.handleClick.bind(this, "About")} >About Me</a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          font-family: 'Cinzel', serif;
          font-size: 1.3em;
          margin: 15px;
        }
      `}</style>
    </div>
  )};
}
export default NavLinks