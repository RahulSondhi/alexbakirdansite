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

                {/* Blog */}
                <Menu.Item key="blog" disabled>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </Menu.Item>

                {/* Team */}
                <Menu.Item key="team">
                    <NavLink to="/team">
                        Team
                    </NavLink>
                </Menu.Item>

                {/* Buy Game */}
                <Menu.Item key="steam">
                    <a href="https://store.steampowered.com/app/1262500/Mirastell/">
                        Buy The Game
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
}

export default GeneralNavbar;
