import React from 'react';
import './Header.css';

const Header = (props) => (
    <header className="score">
        <div className="row">
            <div className="col-md-7 col-left">
                <h2>Click on all the G.I. Joes without
                        clicking the same one twice!</h2>
            </div>
            <div className="col-md-5 col-right">
                <h3>Current Score: {props.score}</h3>
                <br /><br />
                <h3>Best Score: {props.topScore}</h3>
            </div>
        </div>
    </header>
);

export default Header;