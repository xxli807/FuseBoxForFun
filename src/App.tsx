import * as React from "react";
import { Component } from 'react';
 import './App.css';
import * as styles from './styles/site.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.appss}>
                <div className="App-header">
                    <h2>React/typescript and fusebox demo</h2>
                </div>
                <p className="App-intro">
                    hello world.
                </p>
            </div>
        );
    }
}

export default App;
