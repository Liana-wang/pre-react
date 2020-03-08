import React, { Component } from 'react';
import store from '../store/index';

class ReduxPage extends Component {
    state = {}

    componentDidMount() {
        // 订阅state变化
        store.subscribe(() => {
            console.log('state发生变化了了')
            this.forceUpdate()
        })
    }


    render() {
        const { dispatch } = store
        // console.log(store)
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={() => dispatch({ type: 'ADD' })}>add</button>
                <hr />
            </div>
        );
    }
}

export default ReduxPage;