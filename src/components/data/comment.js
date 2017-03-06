import React from 'react';

export default (props) => {
  return (
    <div className='box'> 
    <strong className="user">{props.comment.username} </strong>

    <p className="comment">{props.comment.comment} </p>
       
    </div>


  )
}