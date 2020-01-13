import React, { useState, useEffect } from 'react';
import './App.css';
import GIJoe from './giJoe.json';
import Header from './components/header/Header';
import Wrapper from './components/wrapper/Wrapper';
import JOE from './GIlogo.png';


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const AppTest = () => {
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [clickedGIJoe, setClickedGIJoe] = useState([]);
    const [GIJoe, setGIJoe] = useState();
    const [showAlert, setShowAlert] = useState(0);
    const [showSuccess, setShowSuccess] = useState(0);

    useEffect(() => {
        const clickedImage = (id) => {

            if (clickedGIJoe.indexOf(id) === -1) {
                clickedGIJoe.push(id);
                score.handleIncrement();
                GIJoe.shuffleImages();
            } else if (score === 12) {
                return {
                    showSuccess: 1,
                    score: 0,
                    clickedGIJoe: []
                };
            } else {
                return ({
                    score: 0,
                    clickedGIJoe: [],
                    showAlert: 1
                });
            }
            if (score > topScore) {
                return { topScore: score };
            }
        };

        const handleIncrement = () => {
            return ({ score: score + 1 });
        };

        const shuffleImages = () => {
            return ({ GIJoe: shuffle(GIJoe) });
        };
    })


    return (
        <div className="container">
            <div className="JOEdiv" ><img className="JOE" src={JOE} alt="GI Joe" /></div>
            <div
                className="alert alert-danger"
                style={{ opacity: showAlert }}
            >
                You already clicked on this one, try again...
          </div>
            <div
                className="alert alert-primary"
                style={{ opacity: showSuccess }}
            >
                WOW, There's no way you did this without cheating!
          </div>
            <Header
                score={score}
                topScore={topScore}
            />
            <div className="row">
                {GIJoe.map(GIJoe => (
                    <Wrapper
                        id={GIJoe.id}
                        key={GIJoe.id}
                        job={GIJoe.job}
                        year={GIJoe.year}
                        name={GIJoe.name}
                        image={GIJoe.image}
                        clickedImage={GIJoe.clickedImage}
                    />
                ))}
            </div>
        </div>
    );
}


export default AppTest;