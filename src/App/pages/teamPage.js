import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import '../css/teampage.css';
import title from "../assets/title.png";
import logo from "../assets/logo.png";

import leftTitle from "../assets/team/leftTitle.png";
import rightTitle from "../assets/team/rightTitle.png";

import ImgCon from "../util/imgCon";
import {TeamData,AlphaData,BetaData,TeampageData} from '../content/homepageData';

class TeamPage extends Component {
  
    render() {
        return(
            <>

                <Row className="teamContainer">
                    <Col id="teamTitle" xs={{span:12}} lg={{span:8,offset:2}}>
                        <img src={title} alt="Mirastell"/>
                    </Col>
                </Row>

                <Row className="teamContainer">
                    <Col id="teamIntroTitle" xs={{span:10,offset:1}} lg={{span:6,offset:3}}> About the Team </Col>
                </Row>

                <Row className="teamContainer">
                    <Col id="teamLogo" xs={{span:10,offset:1}} lg={{span:4,offset:1}}>
                        <img src={logo} alt="Mirastell"/>
                    </Col>
                    <Col className="teamText" xs={{span:10,offset:1}} md={{span:6}} lg={{span:5,offset:1}}>
                        <ImgCon item={TeampageData.teamPageAbout} />
                    </Col>
                </Row>

                {TeamData.map(member => (
                    <ImgCon item={member} />
                ))}

                <Row className="teamContainer teamGap">
                    <Col id="teamTesterLeftTitle" xs={{span:3}} lg={{span:2,offset:1}}>
                        <img src={leftTitle} alt="Mirastell"/>
                    </Col>
                    <Col id="teamTesterTitle" xs={{span:6}} lg={{span:6,offset:3}}> Our Testers </Col>
                    <Col id="teamTesterRightTitle" xs={{span:3}} lg={{span:2,offset:0}}>
                        <img src={rightTitle} alt="Mirastell"/>
                    </Col>
                </Row>

                <Row className="teamContainer">
                    <Col id="teamAlphaTitle" xs={{span:12}}> Alpha Testers </Col>
                    {AlphaData.map(member => (
                        <ImgCon item={member} />
                    ))}
                </Row>

                <Row className="teamContainer">
                    <Col id="teamBetaTitle" xs={{span:12}}> Beta Testers </Col>
                    {BetaData.map(member => (
                        <ImgCon item={member} />
                    ))}
                </Row>
                
            </>
        );
    }

}

export default TeamPage;
