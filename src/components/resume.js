import React from 'react';

class Resume extends React.Component {

render() {
  return(
    <div className="resume">
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vRxQZjDYF3LEi3SZwWcCF1pl7KTE2FAnvoAtseHhS3ytheSDAHIF4-RG0IMatQgvgQQ2uIGgk_MB28g/pub?embedded=true" height="1000px" width="850px"></iframe>
    <style jsx>{`
      .resume {
        text-align: center;
      }
    `}</style>
    </div>
  )};
}
export default Resume