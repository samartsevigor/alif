import React from 'react';
import './top-bar.css'

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container d-flex justify-between align-center">
                <div className="top-bar__contacts">
                    <span><i className="fas fa-map-marker-alt"/>2539 W Devon Ave, Chicago, IL 60659</span>
                    <span><a href="tel:(872) 241-9100"><i className="fas fa-phone"/>(872) 241-9100</a></span>
                </div>
                <div className="top-bar__social">
                    <a href="https://facebook.com/" target="_blank" className="fab fa-facebook-square"/>
                    <a href="https://instagram.com/" target="_blank" className="fab fa-instagram-square"/>
                </div>
            </div>
        </div>
    );
};

export default TopBar;