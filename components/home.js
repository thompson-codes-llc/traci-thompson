class Home extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return(
    <div className="home">
      <img src="../static/traci-mountain.jpg" width="90%"/>
      <style jsx>{`
        .home {
          text-align: center;
        }
        img {
          width: 75%;
          border: 20px solid white;
        }
      `}</style>
    </div>
  )};
}
export default Home