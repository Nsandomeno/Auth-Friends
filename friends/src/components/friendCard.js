import React from 'react';
import {Redirect, Link } from 'react-router-dom';
import './friend.css';

function FriendCard(props) {



    return (
        <div>
            <h1>  {props.friend.name} </h1>
            <h4> {props.friend.age}   </h4>
            <h4> {props.friend.email} </h4>
            <Link to={`/api/friends/${props.friend.id}`}><button>Modify</button></Link>
        </div>
    )
}

export default FriendCard