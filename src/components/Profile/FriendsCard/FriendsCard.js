import React from 'react';
import './FriendsCard.scss';
import avatar1 from '../../../assets/avatars/avatar1.png'

function FriendsCard() {
  return (
    <div className="friendscard">
        <h2 className="friendscard__title">Friends</h2>
        <div className="friendscard__content">
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 1</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 2</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 3</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 4</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 5</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 6</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 7</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 8</p>
            </div>
            <div className="friendscard__friend">
                <img src={avatar1} className="friendscard__avatar"/>
                <p className="friendscard__username">Friend 9</p>
            </div>
        </div>
    </div>
  )
}

export default FriendsCard