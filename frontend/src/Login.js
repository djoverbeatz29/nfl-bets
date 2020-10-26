import React from 'react';
import { loginSuccess } from '../actions/auth';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            showSignup: false,
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault();
        const {username, password} = this.state;
        const body = {
            username,
            password
        }
        fetch("http://localhost:3001/auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(r => r.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            }
            else {
                localStorage.setItem('token', data.token);
                this.props.loginSuccess(data);
                this.props.history.push("/home");
            }
        })
    }

    handleSignup = e => {
        e.preventDefault();
        const {first_name, last_name, username, email, password, confirm_password} = this.state;
        const body = {
            first_name,
            last_name,
            username,
            email,
            password
        }

        if (password === confirm_password) {
            fetch("http://localhost:3001/users", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            .then(r => r.json())
            .then(data => {
                this.props.history.push("/login");
            })
        }
    }

    render() {
        return (
            <div>
            {this.state.showSignup ?
                <div>
                    <h1>Sign Up</h1>
                    <form
                        className='signup-form'
                        onSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                    >
                        <label>
                            <div class='label-text'>First Name</div>
                            <input name='first_name' id='first_name' />
                        </label>
                        <label>
                            <div class='label-text'>Last Name</div>
                            <input name='last_name' id='last_name' />
                        </label>
                        <label>
                            <div class='label-text'>Username</div>
                            <input name='username' id='username' />
                        </label>
                        <label>
                            <div class='label-text'>Email</div>
                            <input name='email' id='email' />
                        </label>
                        <label>
                            <div class='label-text'>Password</div>
                            <input name='password' id='password' />
                        </label>
                        <label>
                            <div class='label-text'>Confirm Password</div>
                            <input name='confirm_password' id='confirm_password' />
                        </label>
                        <input type='submit'>Create Account</input>
                    </form>
                </div> :
                <div>
                    <h1>Login Here</h1>
                    <form>
                        <label>
                            <div class='label-text'>Username</div>
                            <input name='username' id='username' />
                        </label>
                        <label>
                            <div class='label-text'>Password</div>
                            <input name='password' id='password' />
                        </label>
                        <input type='submit'>Login</input>
                    </form>
                </div>
            }
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
};

export default connect(null, mapDispatchToProps)(Login);