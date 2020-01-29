import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import './friend.css';
import FriendCard from './friendCard.js';
import axios from 'axios';

class FriendsDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            isLoading: false,
            friend: {
                id: new Date(),
                name: '',
                age: '',
                email: ''
            }
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

    // componentDidUpdate() {
    //     console.log("cdu")
    // }

    addFriend = () => {
        // event.preventDefault()
        axiosWithAuth().post('api/friends', this.state.friend)
            .then((response) => {
                console.log("This is response from add friend", response)
                this.setState({
                    ...this.state,
                    friend: {
                        ...this.state.friend,
                        name: '',
                        age: '',
                        email: ''
                    }
                })
                this.getFriends()
            })
            .catch((error) => {
                console.log("This is an error from add friend:", error)
            })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            friend: {
                ...this.state.friend,
            [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <div>

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
                <form onSubmit={this.addFriend}>
                    <label> Name: 
                        <input
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label> Age:
                        <input
                        name="age"
                        placeholder="Enter Age"
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label> Email
                        <input
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                        />
                    </label>
                </form>
                <button type="submit" onClick={this.addFriend}>Add Friend</button>
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