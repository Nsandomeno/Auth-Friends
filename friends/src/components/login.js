import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials:
            {
            username: '',
            password: ''
            },
            isLoading: false,
            isLoggedIn: false
        }
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
            this.setState({
                ...this.state,
                isLoggedIn: true
            })
        })
        .catch((error) => {
            console.log("This is an error from handleLogin:", error)
        })
    
    }
    

    render() {

        return (
            <div>
                {/* {
                    !this.state.isLoading && !this.state.isLoggedIn && */}
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
                {/* } */}
                {/* {
                    this.state.isLoading && 
                    (<Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                    />)
                }
                {
                    this.state.isLoggedIn && 
                        <div>
                            <button>Sign Out</button>
                        </div>
                    
                } */}

            </div>
        )
    }
}

export default Login;