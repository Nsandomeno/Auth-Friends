import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import './friend.css';
import FriendCard from './friendCard.js';

class FriendsDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            isLoading: false
        }
    }

    componentDidMount() {
        console.log("CDM in Friends Display")
        this.setState({
            ...this.state,
            isLoading: true
        })
        this.getFriends();

    }

        getFriends = () => {
        axiosWithAuth().get('/api/friends')
        .then((response) => {
            console.log("This is response from getFriends:", response.data)
            this.setState({
                friends: response.data,
                isLoading: false
            })
        })
        .catch((error) => {
            console.log("This is an error from getData:", error)
        });
    }

    render() {
        return(
            <div>
                Friends Display
            <div className="friend-display">
                {
                    this.state.isLoading && (
                    <Loader                     
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                    />)
                }
                {
                    this.state.friends.map((friend) => {
                        return (
                            <FriendCard friend={friend} key={friend.id} className="friendCard" />
                        )
                    })
                }
            </div>
            </div>
            
        )
    }
}



export default FriendsDisplay;