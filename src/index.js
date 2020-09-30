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

let config = {
    num: [3, 4],
    rps: 0.25,
    radius: [0.25, 3],
    life: [60, 60],
    v: [0.15, -0.30],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.2],
    position: "screen", // all or center or {x:1,y:1,width:100,height:100}
    color: ["#748cfc","#84d4fc","#4cc4f4","#58d0f8"],
    cross: "dead", // cross or bround
    random: null,  // or null,
    g: 0,    // gravity
    f: [0.1, 0.1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        // ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
  };

render(
    <HashRouter>
        <div className="particles">
            <div className="particles2" />
            <ParticlesBg type="custom" config={config} bg={true} />
        </div>
        <Navbar/>
        <Container fluid>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/team" component={TeamPage}/>
            </Switch>
        </Container>
        <Footer/>    
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
