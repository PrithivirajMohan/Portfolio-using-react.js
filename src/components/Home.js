import React from 'react';

import image from '../My_img.jpg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="image">
                    <img src={image} alt="My Profile pic" />
                </div>
                <div className="intro">
                    <h2>Web Developer</h2>
                    <p></p>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Home;