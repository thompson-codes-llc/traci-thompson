import React from 'react';
import Home from '../components/home';
import NavLinks from '../components/navlinks';
import Resume from '../components/resume';
import About from '../components/about';
import '../css/index.css';


class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      hamburger: true,
    };
  }

  toggleMenu = () => {
    this.setState({
      hamburger: !this.state.hamburger
    });
  }

  focus = (event) => {}

  handleClick = (e) => {
    this.setState({
      active: e
    });
  }

  pageComponent = () => {
    switch(this.state.active) {
      case 'Home': return <Home handleClick={this.handleClick}/>;
      case 'Resume': return <Resume handleClick={this.handleClick}/>;
      case 'About': return <About handleClick={this.handleClick}/>;
      default: return <Home handleClick={this.handleClick} />;
    }
  }

  render() {
    return (
      <div className="page">
        <div className="index">
          <h3 id="name">Traci Thompson <span id="divide">| </span>Software Engineer</h3>
          <NavLinks handleClick={this.handleClick}/>
        </div>
        <div className="content">
          {this.pageComponent()}
        </div>
      </div>
    );
  }
};

export default Index;