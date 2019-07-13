import React from 'react';
import Home from '../components/home';
import NavLinks from '../components/navlinks';
import Resume from '../components/resume';
import About from '../components/about';

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
          <h3 id="name">Traci Thompson <span id="divide">| </span>Full Stack Developer</h3>
          <NavLinks handleClick={this.handleClick}/>
        </div>
        <div className="content">
          {this.pageComponent()}
        </div>
        <style jsx>{`
          body {
            font-family: 'Cinzel', serif;
          }
          .content {
            margin-top: 25px;
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            min-height: 500px;
          }

          .index {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h3 {
            width: 75%;
            text-align: center;
            color: white;
            font-size: 2.2em; 
            line-height: .5;
            font-family: 'Cinzel', serif;
            margin-top: 50px;
          }

          h1 {
            line-height: 0;
          }

          @media screen and (max-width: 981px) {
            #name {
              line-height: 1em;
              width: 40%;
            }
            #divide {
              display: none;
            }
          }

          @media screen and (max-width: 545px) {
            #name {
              width: 70%;
            }
          }
        `}</style>
      </div>
    );
  }
};

export default Index;