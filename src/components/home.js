import React from 'react';
import '../css/home.css';
import Photo from '/Users/traci/code/traci-thompson/src/static/traci-mountain.jpg';

class Home extends React.Component {

render() {
  return(
    <div className="home">
      <img src={Photo} width="90%" alt="traci_on_mountain" />
    </div>
  )};
}
export default Home