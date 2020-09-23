import React, { Component } from 'react';
import { Affix, Button } from 'antd';
import { Menu } from 'antd';
class Navbar extends Component {
    constructor(props) {
        super();
        this.state = { current: null }
    }
    handleClick(e) {
        this.setState((state, props) => ({ current: e.key }));
    }
    render() {
        const { current } = this.state;
        return (
            // <Affix offsetTop="10px">
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="signup" >
                    Brand
                </Menu.Item>
                <Menu.Item key="about" >
                    About
                </Menu.Item>
                <Menu.Item key="login" >
                    Login
                </Menu.Item>
                <Menu.Item key="signup">
                    Signup
                </Menu.Item>

            </Menu>
            // {/* </Affix> */}
        )
    }

}

export default Navbar;