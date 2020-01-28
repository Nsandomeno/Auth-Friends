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
            },
            isLoading: false
        }
    }

    componentDidMount() {
        // this.handleLogin();
        console.log("CDM")
    }

    handleChange = (event) => {
        console.log("Handling Change!")
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        // make a POST request to the server
        // the server will authenticate the user based on their credentials
        // If they can be authenticated the server will return a token
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then((response) => {
            console.log("This is the response from handleLogin:", response)
            localStorage.setItem('token', response.data.payload)
            this.props.history.push('/api/friends')
        })
        .catch((error) => {
            console.log("This is an error from handleLogin:", error)
        })
    
    }
    

    render() {

        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label>Username: </label>
                    <input 
                    placeholder="Enter Username"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input 
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleLogin}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;