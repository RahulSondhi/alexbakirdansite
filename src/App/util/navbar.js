import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Drawer, Button} from 'antd';

import GeneralNavbar from './rightNavbar';

import Logo from '../assets/logo.png';

class Navbar extends Component {

    state = {
        current: 'mail',
        visible: false,
        type: "normal"
    }

    showDrawer = () => {
        this.setState({visible: true});
    };
    onClose = () => {
        this.setState({visible: false});
    };

    constructor(props) {
        super(props);

        if(this.props.type === "game"){
            this.state.type = "game";
        }
    }

    render() {
        return (
            <nav className="menuBar grid-x">
                <div className="logo">
                    <NavLink to={"/"}>
                        {/* <img src={Logo} alt="AlexBakirdan Logo"/> */}
                    </NavLink>
                </div>
                <div className="menuCon grid-x align-middle">
                    <div className="rightMenu">
                        <GeneralNavbar mode={'horizontal'} type={this.state.type}/>
                    </div>
                    <div className="barsMenu">
                        <Button className="barsMenuBtn" type="primary" onClick={this.showDrawer}>
                            <span className="barsBtn"></span>
                        </Button>
                    </div>
                    <Drawer
                        title="Menu"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}>
                        <GeneralNavbar mode={'inline'} type={this.state.type} save={this.props.save} quit={this.props.quit}/>
                    </Drawer>
                </div>
            </nav>
        )
    }
}

export default Navbar;