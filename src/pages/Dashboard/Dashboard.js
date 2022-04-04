import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
  
    state = {
        
    }

    componentDidMount() {
         const { userId } = sessionStorage.getItem('userId');  
        axios.get(`http://localhost:3030/users/${userId}/dashboard`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    


    render() {
    
        return (
            <div>
                <h1>Dashboard</h1>

                <h2>Welcome {}</h2>

            </div>
        )  
    }
  
}

export default Dashboard