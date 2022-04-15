import React from 'react';
import './FriendsCard.scss';

function FriendsCard() {
  return (
    <div className="friendscard">
        <h2 className="friendscard__title">Friends</h2>
        <div className="friendscard__content">
            <div className="friendscard__friend">
                <img src={"https://static.fandomspot.com/images/06/16155/02-samus-aran-metroid-other-m-screenshot.jpg"} className="friendscard__avatar"/>
                <p className="friendscard__username">JDoe456</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://www.looper.com/img/gallery/the-mythology-in-god-of-war-explained/intro-1614185502.jpg"} className="friendscard__avatar"/>
                <p className="friendscard__username">Kratos 2</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://www.zeldadungeon.net/wp-content/uploads/2013/09/Link1.png"} className="friendscard__avatar"/>
                <p className="friendscard__username">Link</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://freegametips.com/wp-content/uploads/2020/09/1600887744_Bowser-Super-Mario-A-very-peculiar-villain-1024x576.jpg"} className="friendscard__avatar"/>
                <p className="friendscard__username">Bowser</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://cdn.vox-cdn.com/thumbor/q9ldkEs7xbEWFgMBondzK3Ntzqs=/85x0:1014x619/920x613/filters:focal(85x0:1014x619):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/29585969/mgsvgz_ss_demo_002.0.jpg"} className="friendscard__avatar"/>
                <p className="friendscard__username">Snake</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://cdn.vox-cdn.com/thumbor/EX9U2X34axDOUD9Jo2bokrM_Lvg=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg"} className="friendscard__avatar"/>
                <p className="friendscard__username">Peter</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/geralt-of-rivia-witcher-3-feature.jpg?q=50&fit=contain&w=960&h=500&dpr=1.5"} className="friendscard__avatar"/>
                <p className="friendscard__username">Geralt</p>
            </div>
            <div className="friendscard__friend">
                <img src={"https://static1-us.millenium.gg/articles/8/97/28/@/113699-1224405-sylvanas-article-image-bd-1-article_image_bd-1.jpg"} className="friendscard__avatar"/>
                <p className="friendscard__username">Sylvanas</p>
            </div>
        </div>
    </div>
  )
}

export default FriendsCard