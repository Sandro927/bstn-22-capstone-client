import React, { Component } from 'react';
import './SocialAccounts.scss';
import axios from 'axios';
import steamlogo from '../../../assets/logos/steam_logo.svg';
import discordlogo from '../../../assets/logos/discord_logo.png';
import divisionlogo from '../../../assets/logos/division_logo.png';
import originlogo from '../../../assets/logos/origin_logo.png';
import psnlogo from '../../../assets/logos/psn_logo.png';
import switchlogo from '../../../assets/logos/switch_logo.png';
import xboxlogo from '../../../assets/logos/xbox_logo.svg';
import wowlogo from '../../../assets/logos/wow_logo.png';
import osrslogo from '../../../assets/logos/osrs_logo.png';
import splitgatelogo from '../../../assets/logos/splitgate_logo.png';


const socialList = [
  {
    name: "Origin",
    image: originlogo
  },
  {
    name: "Discord",
    image: discordlogo
  },
  {
    name: "Division",
    image: divisionlogo
  },
  {
    name: "PSN",
    image: psnlogo
  },
  {
    name: "Nintendo",
    image: switchlogo
  },
  {
    name: "Steam",
    image: steamlogo
  },
  {
    name: "Xbox",
    image: xboxlogo
  },
  {
    name: "WoW",
    image: wowlogo
  },
  {
    name: "OSRS",
    image: osrslogo
  },
  {
    name: "Splitgate",
    image: splitgatelogo
  },
];

export class SocialAccounts extends Component {


  state = {
    OriginSelected: false,
    OriginUsername: "",
    DiscordSelected: false,
    DiscordUsername: "",
    PSNSelected: false,
    PSNUsername: "",
    NintendoSelected: false,
    NintendoUsername: "",
    SteamSelected: false,
    SteamUsername: "",
    DivisionSelected: false,
    DivisionUsername: "",
    XboxSelected: false,
    XboxUsername: "",
    WoWSelected: false,
    WoWUsername: "",
    OSRSSelected: false,
    OSRSUsername: "",
    SplitgateSelected: false,
    SplitgateUsername: "",
    renderList: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/users/${this.props.userId}/profile`)
      .then(res => {
        this.setState({
          OriginUsername: res.data.origin_username || "",
          DiscordUsername: res.data.discord_username || "",
          PSNUsername: res.data.psn_username || "",
          NintendoUsername: res.data.nintendo_username || "",
          SteamUsername: res.data.steam_username || "",
          DivisionUsername: res.data.division_username || "",
          XboxUsername: res.data.xbox_username || "",
          WoWUsername: res.data.wow_username || "",
          OSRSUsername: res.data.osrs_username || "",
          SplitgateUsername: res.data.splitgate_username || "",
        })
      })

  }

  renderSocialAccounts = () => {
    return socialList.map((social, index) => {
      if (this.state[`${social.name}Username`]) {
        return <div className="socials__row" key={index}>
          <div className="socials__left">
            <img src={social.image} className="socials__icon"></img>
            <p className="socials__platform">{social.name}</p>
          </div>
          <p className="socials__username">{this.state[`${social.name}Username`]}</p>
        </div>
      }
    })
  }


  handleCheckedChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked
    }, () => {
      if (this.state[e.target.name] === false) {
        this.setState({
          [`${e.target.id}Username`]: ""
        })
      }
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3030/users/${this.props.userId}/profile`, {
        OriginUsername: this.state.OriginUsername,
        DiscordUsername: this.state.DiscordUsername,
        PSNUsername: this.state.PSNUsername,
        NintendoUsername: this.state.NintendoUsername,
        SteamUsername: this.state.SteamUsername,
        DivisionUsername: this.state.DivisionUsername,
        XboxUsername: this.state.XboxUsername,
        WoWUsername: this.state.WoWUsername,
        OSRSUsername: this.state.OSRSUsername,
        SplitgateUsername: this.state.SplitgateUsername,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {

    return (
      <div className="socials">


        <h2 className="socials__title">Social Accounts</h2>
        <div className="socials__content">
          {this.props.userId === sessionStorage.getItem('userId') ?
            <form className="socials__form" onSubmit={this.handleSubmit}>
              {socialList.map((social, index) => {
                return (
                  <div className="socials__form-row" key={index}>
                    <div className="socials__left">
                      <img className="socials__icon" src={social.image} />
                      <input
                        name={`${social.name}Selected`}
                        type="checkbox"
                        className="socials__checkbox"
                        onChange={this.handleCheckedChange}
                        id={social.name}
                        checked={this.state[`${social.name}Selected`]}
                      />
                      <label htmlFor={`${social.name}Checkbox`}>{social.name}</label>
                    </div>

                    <input
                      text="text"
                      className="socials__textinput"
                      name={`${social.name}Username`}
                      placeholder="Username"
                      disabled={!this.state[`${social.name}Selected`]}
                      onChange={this.handleInputChange}
                      value={this.state[`${social.name}Username`]}
                    />
                  </div>
                )
              })}
              <button className="socials__button socials__button--save">SAVE</button>
            </form>
            :
            <>
              {!this.renderSocialAccounts().every((e) => e === undefined) ?  this.renderSocialAccounts() : "User has not linked any social accounts yet."}
              
            </>
          }
        </div>


      </div>
    )
  }
}

export default SocialAccounts