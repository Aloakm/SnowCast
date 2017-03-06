import React from 'react';
import moment from 'moment'

export default (props) => {
  return (
    <div className='box'> 
    <strong className="user">{props.comment.username} <span style={{float:'right'}}>{moment(props.comment.created, "YYYY-MM-DD").format('MMMM DD YYYY')}</span> </strong>

    <p className="comment">{props.comment.comment} </p>
    
       
    </div>


  )
}