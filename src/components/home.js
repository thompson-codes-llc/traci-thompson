import React from 'react';
import Photo from '/Users/traci/code/traci-thompson/src/static/traci-mountain.jpg';

class Home extends React.Component {

render() {
  return(
    <div className="home">
      <img src={Photo} width="90%" alt="traci_on_mountain" />
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