import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function FriendEdit(props) {
const [friend, findFriend] = useState()



    return (
        <div>
            <form>
            <label> Name: 
                        <input
                        name="name"
                        placeholder="Enter Name"

                        />
                    </label>
                    <label> Age:
                        <input
                        name="age"
                        placeholder="Enter Age"


                        />
                    </label>
                    <label> Email
                        <input
                        name="email"
                        placeholder="Enter Email"


                        />
                    </label>
            </form>
            <button>
                Save
            </button>
            <button>
                Delete
            </button>
        </div>
    )
}
export default FriendEdit;