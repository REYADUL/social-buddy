import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comments/Comment';

const FriendDetail = () => {
    const{id} =  useParams();
    const[postId,setPostId] =useState({});
    useEffect(() =>{
         
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setPostId(data));
    },[]);
    
    const[comment,setComment]= useState([]);

    useEffect(() =>{

        
        const url2 =`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url2)
        .then(res => res.json())
        .then(data =>setComment(data));

    },[]);

    
    const detailsStyle={
        textAlign: 'center',
        color: 'red',
        borderBottom: '10px solid purple'
    }

    
    return (
        <div  >
            <div style ={detailsStyle}>
            <h1> This friend {id} detail</h1>
            
            </div>
             

            <div>
            {
               comment.map(comments => <Comment comment={comments}></Comment>)
           }
            </div>
            
           
           
        </div>
    );
};

export default FriendDetail;