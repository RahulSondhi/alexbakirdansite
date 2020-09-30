import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import {Tooltip} from 'antd';

import { GlobalOutlined, GithubOutlined, YoutubeOutlined, TwitterOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined, LinkOutlined  } from '@ant-design/icons';

import '../css/imgCon.css';

class ImgCon extends Component {

    constructor(props) {
        super();
    }

    render() {

        this.item = this.props.item;
        this.className = this.props.className;

        if(this.item.type === "profile"){

            return (
                <Row className={this.item.reverse ? 'imgConContainer  imgConReverse' : 'imgConContainer '}>
                    <Col className="imgConImg" xs={10} lg={{span:5,offset:1}}>
                        <img src={this.item.src} alt="random img"/>
                    </Col>
                    <Col className="imgConText" xs={12} lg={{span:7,offset:0}}>
                        <Row className="imgConTextTitle"> {this.item.title} </Row>
                        <Row className="imgConTextSubtitle"> {this.item.subtitle} </Row>
                        <Row className="imgConTextBody"> {this.item.text} </Row>
                        <Row className="imgConTextFooter">
                            <IconPreview items={this.item.socialMedia} className=""/>
                        </Row>
                    </Col>
                </Row>
            )

        }else if(this.item.type === "card"){

            return (
                <Col xs={{span:11}} sm={{span:6}} md={{span:4}}  xl={{span:3}} className="imgConCardCon">
                    <Col xs={{span:11}} className='imgConCard'>
                        <Col className="imgConImg" xs={12}>
                            <img src={this.item.src} alt="random img"/>
                        </Col>
                        <Col className="imgConText" xs={12}>
                            <Row className="imgConTextTitle"> {this.item.title} </Row>
                            <Row className="imgConTextSubtitle"> {this.item.subtitle} </Row>
                            <Row className="imgConTextBody"> {this.item.text} </Row>
                            <Row className="imgConTextFooter">
                                <IconPreview items={this.item.socialMedia} className=""/>
                            </Row>
                        </Col>
                    </Col>
                </Col>
            )
            
        }else if(this.item.type === "text"){

            return (
                <Row className='imgConContainer'>
                    <Col className="imgConText" xs={12}>
                        <Row className="imgConTextTitle"> {this.item.title} </Row>
                        <Row className="imgConTextBody"> {this.item.text} </Row>
                        <Row className="imgConTextFooter">
                            <IconPreview items={this.item.socialMedia} className=""/>
                        </Row>
                    </Col>
                </Row>
            )

        } else if(this.item.type === "basic"){
            return (
                <Row className={this.item.reverse ? 'imgConContainer  imgConReverse' : 'imgConContainer '}>
                    <Col className="imgConImg" xs={6} lg={{span:3,offset:1}}>
                        <img src={this.item.src} alt="random img"/>
                    </Col>
                    <Col className="imgConText" xs={12} lg={{span:7,offset:1}}>
                        <Col className="imgConTextTitle"> {this.item.title} </Col>
                        <Col className="imgConTextBody"> {this.item.text} </Col>
                    </Col>
                </Row>
            )
            
        }
    }
}

// ItemPreview Item [img,name,type,desc,id]
const IconPreview = ({items, className}) => (
    <>
        {items.map(item => (<GetIcon
            key={new Date().getMilliseconds() + (Math.random() * 69420)}
            item={item}
            className={className}/>))}
    </>
);

class GetIcon extends Component {

    constructor(props) {
        super();
    }

    render() {
        this.item = this.props.item;
        this.className = this.props.className;

        if (this.item.link !== null && this.item.link !== "" && this.item.link !== undefined) {
            this.onclick = (e) => {window.location.href = this.item.link;};
        } else {
            this.onclick = (e) => {e.preventDefault();}
        }

        if (this.item.type === "twitter") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <TwitterOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        } else if (this.item.type === "facebook") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <FacebookOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        } else if (this.item.type === "instagram") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <InstagramOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        } else if (this.item.type === "github") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <GithubOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        } else if (this.item.type === "youtube") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <YoutubeOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        } else if (this.item.type === "linktree") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <LinkOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        } else if (this.item.type === "linkedin") {
            return (   
                <Col className={"IconPreview " + this.className}>
                    <Tooltip placement="bottom" title={this.item.type}>
                        <LinkedinOutlined key={this.id} onClick={this.onclick} />
                    </Tooltip>
                </Col>
            );
        }

        return (
            <Col className={"IconPreview " + this.className}>
                <Tooltip placement="bottom" title={this.item.type}>
                    <GlobalOutlined key={this.id} onClick={this.onclick} />
                </Tooltip>
            </Col>
        );
    }
};

export default ImgCon;