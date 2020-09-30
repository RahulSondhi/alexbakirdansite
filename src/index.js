import React from 'react';
import {render} from 'react-dom';
import history from './App/util/history';
import { HashRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import {Container} from 'react-bootstrap';

import Navbar from './App/util/navbar.js';
import Footer from './App/util/footer.js';
import HomePage from './App/pages/homePage';
import TeamPage from './App/pages/teamPage';
import ParticlesBg from 'particles-bg'

import './index.css';
import './App/css/navigation.css';

render(
    <HashRouter>
        <div className="particles">
            <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
            </div>
            
            <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
            </div>
            
            <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
            </div>
            
            <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
            </div>
        </div>
        <Navbar/>
        <Container fluid>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={TeamPage}/>
            </Switch>
        </Container>
        <Footer/>    
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
