import React, {Component} from 'react';
import { TwitterOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons';

import '../css/navigation.css';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="footer grid-x">
                <div className="company">
                    © Alex Bakirdan
                </div>
                <div className="socials">
                    <a href="https://twitter.com/alexbakirdan">
                        <TwitterOutlined />
                    </a>
                    <a href="https://www.instagram.com/bakirdan55/">
                        <InstagramOutlined />
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-bakirdan-6686b0176/">
                        <LinkedinOutlined />
                    </a>
                </div>
            </nav>
        )
    }
}

export default Footer;