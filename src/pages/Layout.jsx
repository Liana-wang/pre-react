import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

class Layout extends Component {
    state = {}
    render() {
        const { children } = this.props
        return (
            <div>
                <TopBar />
                {/* {this.props.children} */}
                {children.content}
                {children.txt}
                <button onClick={children.btnClick}>click事件</button>
                <BottomBar />
                <hr />
            </div>
        );
    }
}

export default Layout;