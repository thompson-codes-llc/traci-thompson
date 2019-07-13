import React from 'react';
import '../css/home.css';
import Photo from '../static/traci-mountain.jpg';

class Home extends React.Component {

render() {
  return(
    <div className="home">
      <img src={Photo} width="90%" alt="traci-mountain" />
    </div>
  )};
}
export default Home