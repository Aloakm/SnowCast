import React from 'react';

export default (props) => {
  return(
    <div className="row">
      <div className="col-md-8 clicklink" onClick={()=>props.fetch(props.fav.nameString)}>{props.fav.nameString}</div>
    </div>
  )
}