import React from 'react';
import axios from 'axios';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials:
            {
            username: '',
            password: ''
            }
        }
    }

    componentDidMount() {
        this.handleLogin();
    }

    handleChange = () => {
        console.log("Handling Change!")
    }

    handleLogin = (event) => {
        // make a POST request to the server
        // the server will authenticate the user based on their credentials
        // If they can be authenticated the server will return a token
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(response => console.log("This is response from handle login:", response))
            .catch(error => console.log("This is error from handleLogin:", error))
    }

    render() {

        return (
            <div>
                <form>
                    <label>Username: </label>
                    <input 
                    placeholder="Enter Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <input 
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;