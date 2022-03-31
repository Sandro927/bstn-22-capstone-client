import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {

    state = {
        userInfo: {},
        isLoading: true,
    }

    componentDidMount() {
        let token = sessionStorage.getItem('authToken');  
        if (!token) {
            this.props.history.push('/login');
        } else {
            axios.get('http://localhost:3030/users/current', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                console.log(res)
                this.setState({
                    userInfo: res.data,
                    isLoading: false
                })
                sessionStorage.setItem('username', this.state.userInfo.username);
            })
        }
    }

    handleLogout = () => {
        sessionStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <h2>Welcome {this.state.userInfo.name}</h2>

                <button onClick={this.handleLogout}>Log Out</button>
            </div>
        )  
    }
  
}

export default Dashboard