import Link from 'next/link'

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

      <style jsx>{`
        .container {
          display: inline-block;
          cursor: pointer;
          align-self: flex-start;
          width: 10%;
        }

        .bar {
          width: 35px;
          height: 5px;
          background-color: white;
          margin: 6px 0;
        }

        .change.bar1 {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
          transform: rotate(-45deg) translate(-9px, 6px) ;
        }

        .change.bar2 {
          opacity: 0;
        }

        .change.bar3 {
          -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
          transform: rotate(45deg) translate(-8px, -8px) ;
        }
      `}</style>
    </div>
  )};
}
export default Header