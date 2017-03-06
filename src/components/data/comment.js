import React from 'react';

export default (props) => {
  return (
    <div> 
    <strong>{props.comment.username} : </strong>

    {props.comment.comment} 


    </div>


  )
}