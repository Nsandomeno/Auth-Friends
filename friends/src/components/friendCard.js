import React from 'react';
import './friend.css';

function FriendCard(props) {
    return (
        <div>
            <h1>  {props.friend.name} </h1>
            <h4> {props.friend.age}   </h4>
            <h4> {props.friend.email} </h4>
        </div>
    )
}

export default FriendCard