import React from 'react';
import './ProfileCard.scss';
import axios from 'axios';


class ProfileCard extends React.Component {

    state = {
        bioText: "",
        avatarURL: "",
        userName: ""
    }

    componentDidMount() {
        axios.get(`http://localhost:3030/users/${this.props.userId}/profile`)
        .then(res => {
            console.log(res.data.username)
          if (res.data.length === 0) {
                axios.post(`http://localhost:3030/users/${this.props.userId}/profile`, {
                    userId: this.props.userId
                })
            }
            else if(res.data.bio || res.data.userAvata || res.data.username) {
                this.setState({ 
                    bioText: res.data.bio,
                    avatarURL: res.data.userAvatar,
                    userName: res.data.username
            })}
        })
        .catch(err => {
          console.log(err);
        })
      }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3030/users/${this.props.userId}/profile`, {
                userId: this.props.userId,
                bio: this.state.bioText,
            })
            .then(res => {
                axios.put(`http://localhost:3030/users/${this.props.userId}`, {
                    userAvatar: this.state.avatarURL
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

    render() {
        return (
            <div className="profilecard">
                <h1 className="profilecard__title">Profile</h1>
                <div className="profilecard__content">
                    <img src={this.state.avatarURL || "https://www.svg.com/img/gallery/the-most-terrible-things-master-chief-has-ever-done/intro-1556227104.webp"} className="profilecard__avatar"/> 
                    <p className="profilecard__user">{this.state.userName}</p>
                    {
                        this.props.userId !== sessionStorage.getItem('userId') ?
                        <>
                            <div className="profilecard__ctas">
                                <button className="profilecard__button">ADD FRIEND</button>
                                <button className="profilecard__button profilecard__button--secondary">MESSAGE</button>
                            </div>
                            <h4 className="profilecard__bio-header">Bio</h4>
                            <p className="profilecard__bio">{this.state.bioText || "User has not created a Bio yet..."}</p>       
                        </>
                        : 
                        <>
                            <form className="profilecard__form" onSubmit={this.handleSubmit}>
                                <input 
                                    type="text" 
                                    name="avatarURL"
                                    className="profilecard__input" 
                                    placeholder="Enter Avatar Image URL"
                                    onChange={this.handleChange}
                                    value={this.state.avatarURL}
                                />
                                
                                <textarea 
                                    className="profilecard__textarea" 
                                    placeholder="Bio" 
                                    rows="5" 
                                    name="bioText"
                                    onChange={this.handleChange}
                                    value={this.state.bioText}
                                />
                                <button className="profilecard__button profilecard__button--save">SAVE</button>
                            </form>
                        </>
                    }
                </div>
            </div>
        )
    }
  
}

export default ProfileCard