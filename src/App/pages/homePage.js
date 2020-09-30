import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import '../css/homepage.css';

import ImgCon from "../util/imgCon";
import HomepageData from '../content/homepageData';

class HomePage extends Component {
  
    render() {
        return(
            <>
                <Row id="welcomeContainer">
                    <Col id="teamIntroTitle" xs={{span:10,offset:1}} lg={{span:6,offset:3}}> My Work </Col>
                </Row>

                <Row className="teamContainer">
                    {HomepageData.map(article => (
                        <ImgCon item={article} />
                    ))}
                </Row>
                
            </>
        );
    }

}

export default HomePage;
