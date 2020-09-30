import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Menu} from 'antd';

class GeneralNavbar extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Menu theme="dark" mode={this.props.mode}>

                {/* Search */}
                <Menu.Item key="home">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </Menu.Item>

                {/* Team */}
                <Menu.Item key="about">
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </Menu.Item>
            </Menu>
        )
    }
}

export default GeneralNavbar;
