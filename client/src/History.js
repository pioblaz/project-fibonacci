import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class History extends Component{
    state = {
        indices: []
    };

    getValues() {
        var indices = sessionStorage.getItem("indices");
        this.state.indices = indices;
    }

    renderSeenIndexes() {
        var indices = "";
        for (var i in this.state.indices){
            indices += this.state.indices[i];
        }
        return indices;
    }

    render() {
    return (
        <div>
            {this.getValues()}
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Historia ostatnich 10 indeksów:
            </a>
            <p id="history">{this.renderSeenIndexes()}</p>
            <Link to="/fibcal">Powrót</Link>
            </header>
        </div>
    );
    }
  };

export default History;