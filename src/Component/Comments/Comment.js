import React from 'react';

const Comment = (props) => {

    const detailsStyle ={
        background: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)',

        paddingLeft:'400px',
        paddingTop:'10px',
        border: '1px solid purple',
        borderRadius:'20px',
        margin:'10px'
    }
    
    const {name,body}=props.comment;
    return (
        <div style ={detailsStyle}>
            <h3>{name}</h3>
            <p>{body}</p>

        </div>
    );
};

export default Comment;