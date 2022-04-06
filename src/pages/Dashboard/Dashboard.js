import React from 'react';
import axios from 'axios';
import './Dashboard.scss';
import PlayChart from '../../components/PlayChart/PlayChart';
import DashMenu from '../../components/DashMenu/DashMenu';
import GamesList from '../../components/GamesList/GamesList';
import ApexGameCard from '../../components/ApexGameCard/ApexGameCard';




class Dashboard extends React.Component {
  
    state = {
        
    }

    

    componentDidMount() {
         const { userId } = sessionStorage.getItem('userId');  
        axios.get(`http://localhost:3030/users/${userId}/dashboard`)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
            })
    }
    


    render() {
        return (
            <section>
                <DashMenu />
                <main className="dashboard">
                    <PlayChart />
                    <GamesList />
                    <ApexGameCard />

                </main>
            </section>
        )  
    }
  
}

export default Dashboard