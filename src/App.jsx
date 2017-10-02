import * as React from "react";
import { Component } from 'react';
import './App.css';
import * as logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>React/typescript and fusebox</h2>
                </div>
                <p className="App-intro">
                    hello world.
                </p>
            </div>
        );
    }
}

export default App;
