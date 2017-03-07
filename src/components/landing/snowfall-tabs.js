import React from 'react';

export default (props) => {
  return(
    <div className="row">
      <div className="col-md-8">{props.name}</div>
      <div className="col-md-4">{props.snow}</div>
    </div>
  )
}