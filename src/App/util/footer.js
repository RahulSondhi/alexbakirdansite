import React, {Component} from 'react';
import { TwitterOutlined, InstagramOutlined, FacebookOutlined, LinkedinOutlined} from '@ant-design/icons';

import '../css/navigation.css';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="footer grid-x">
                <div className="company">
                    ©Trexus183
                </div>
                <div className="socials">
                    <a href="https://twitter.com/mirastellGame">
                        <TwitterOutlined />
                    </a>
                    <a href="https://www.instagram.com/mirastellgame/">
                        <InstagramOutlined />
                    </a>
                    <a href="https://www.facebook.com/MirastellGame/">
                        <FacebookOutlined />
                    </a>
                    <a href="https://www.linkedin.com/company/trexus183">
                        <LinkedinOutlined />
                    </a>
                </div>
            </nav>
        )
    }
}

export default Footer;