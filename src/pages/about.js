import Header from '../components/header'

export default function About() {
  return (
    <div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <style jsx>{`
        .bar {
          width: 35px;
          height: 5px;
          background-color: black;
          margin: 6px 0;
        }
      `}</style>
    </div>
  )
}