import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function FriendEdit(props) {
const [friend, setFriend] = useState({
    name:  '',
    age: '',
    email: ''
})

useEffect(() => {
    console.log(props)
    axiosWithAuth().get(`/api/friends/${props.match.params.id}`)
        .then((response) => {
            console.log("This is response from FriendEdit:", response)
            setFriend({
                name: response.data.name,
                age: response.data.age,
                email: response.data.email
            })

        })
        .catch((error) => {
            console.log("This is error from friend Edit")
        })
},[])

const clear = (event) => {
    event.preventDefault();
    setFriend({
        name: '',
        age: '',
        email: ''
    })
}

const handleChange = (event) => {
    setFriend({
        [event.target.name]: event.target.value
    })
}

const saveEdit = (event, id, editInfo) => {
    event.preventDefault();
    axiosWithAuth().put(`/api/friends/${id}`, editInfo)
        .then((response) => {
            console.log("This is the respone from save edit:", response)
            props.history.push('/api/friends')
        })
        .catch((error) => {
            console.log("This is the error from save edit:", error)
        })
} 



    return (
        
        <div>
            <form>
            <label> Name: 
                        <input
                        name="name"
                        placeholder="Enter Name"
                        value={friend.name}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Age:
                        <input
                        name="age"
                        placeholder="Enter Age"
                        value={friend.age}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Email
                        <input
                        name="email"
                        placeholder="Enter Email"
                        value={friend.email}
                        onChange={handleChange}
                        />
                    </label>
            </form>
            <button onClick={(event) => saveEdit(event, props.match.params.id, friend)}>
                Save
            </button>
            <button onClick={clear}>
                Clear
            </button>
            <button>
                Delete
            </button>
        </div>
    )
}
export default FriendEdit;