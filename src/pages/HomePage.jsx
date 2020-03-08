import React, { Component } from 'react'
import Layout from './Layout'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <Layout>
                {
                    {
                        content: (
                            <div>具名HomePage</div>
                        ),
                        txt: '这是一个文本',
                        btnClick: () => { console.log('btnClick') }
                    }
                }
            </Layout>
        )
    }
}

export default HomePage;