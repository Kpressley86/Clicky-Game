import React, { Component } from 'react';
import './App.css';
import GIJoe from './giJoe.json';
import Header from './components/header/Header';
import Wrapper from './components/wrapper/Wrapper';
import JOE from './GIlogo.png';

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    GIJoe,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedGIJoe: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a let to be updated
    let clickedGIJoe = this.state.clickedGIJoe;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    if (clickedGIJoe.indexOf(id) === -1) {
      clickedGIJoe.push(id);
      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedGIJoe: []
      });
    } else {
      this.setState({
        score: 0,
        clickedGIJoe: []
      });
      this.setState({
        showAlert: 1
      });
    }
    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ GIJoe: shuffle(GIJoe) });
  };

  render() {
    return (
      <div className="container">
        <div className="JOEdiv" ><img className="JOE" src={JOE} alt="GI Joe" /></div>
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          You already clicked on this one, try again...
          </div>
        <div
          className="alert alert-primary"
          style={{ opacity: this.state.showSuccess }}
        >
          WOW, There's no way you did this without cheating!
          </div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.GIJoe.map(GIJoe => (
            <Wrapper
            id={GIJoe.id}
              key={GIJoe.id}
              job={GIJoe.job}
              year={GIJoe.year}
              name={GIJoe.name}
              image={GIJoe.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;