import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import '../css/teampage.css';
import Alex from "../assets/alex.jpg";

import ImgCon from "../util/imgCon";
import {TeampageData} from '../content/homepageData';

class TeamPage extends Component {
  
    render() {
        return(
            <>
                <Row className="teamContainer">
                    <Col id="teamIntroTitle" xs={{span:10,offset:1}} lg={{span:6,offset:3}}> About the Team </Col>
                </Row>

                <Row className="teamContainer">
                    <Col id="teamLogo" xs={{span:10,offset:1}} lg={{span:4,offset:1}}>
                        <img src={Alex} alt="Mirastell"/>
                    </Col>
                    <Col className="teamText" xs={{span:10,offset:1}} md={{span:6}} lg={{span:5,offset:1}}>
                        <ImgCon item={TeampageData.teamPageAbout} />
                    </Col>
                </Row>

                {TeampageData.teamPageSections.map(member => (
                    <ImgCon item={member} />
                ))}
            </>
        );
    }

}

export default TeamPage;
