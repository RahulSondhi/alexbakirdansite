import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import '../css/homepage.css';
import title from "../assets/title.png";

import ImgCon from "../util/imgCon";
import HomepageData from '../content/homepageData';

class HomePage extends Component {
  
    render() {
        return(
            <>
                <Row id="welcomeContainer">
                    <Col id="welcomeTitle" xs={{span:12}} lg={{span:8,offset:2}}>
                        <img src={title} alt="Mirastell"/>
                    </Col>
                    <Col id="welcomeVideo" xs={{span:10,offset:1}} lg={{span:6,offset:3}}>
                        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/8UvKddFn_m8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div id="welcomeButton" onClick={() => {
                            window.location.href = "https://store.steampowered.com/app/1262500/Mirastell/";
                        }}>Wishlist Game</div>
                    </Col>
                </Row>

                {HomepageData.map(article => (
                    <ImgCon item={article} />
                ))}
                
            </>
        );
    }

}

export default HomePage;
