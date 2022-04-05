import React from 'react';
import './StreamerCard.scss';
import ninja from '../../assets/avatars/ninja.PNG';
import ninjabg from '../../assets/avatars/ninjabg.jpg';

function StreamerCard({name, src, profile}) {
  return (
    <div className="streamercard">
        <h1 className="streamercard__title">Live Streamers</h1>
        <div className="streamercard__streamers">
            <img className="streamercard__image" src={ninja}/>
        

       
            <img className="streamercard__image" src={ninja}/> 
 

      
            <img className="streamercard__image" src={ninja}/> 
    

      
            <img className="streamercard__image" src={ninja}/>
       
        
        
            <img className="streamercard__image" src={ninja}/>    
        </div>
    </div>
  )
}

export default StreamerCard