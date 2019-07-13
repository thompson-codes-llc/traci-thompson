import React from 'react';
import '../css/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return(
    <div className="container" onClick={this.props.toggleMenu}>
      <div className={"bar bar1 " + (!this.props.hamburger ? ' change' : null)}></div>
      <div className={"bar bar2 " + (!this.props.hamburger ? ' change' : null)}></div>
      <div className={"bar bar3 " + (!this.props.hamburger ? ' change' : null)}></div>
    </div>
  )};
}
export default Header