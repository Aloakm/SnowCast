import React from 'react';

export default (props) => {
  return(
      <div className="clicklink" onClick={()=>props.fetch(props.fav.nameString)}>
        {props.fav.nameString}
      </div>

  )
}