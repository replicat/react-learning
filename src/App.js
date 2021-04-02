import React from 'react';
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'

class App extends React.Component {
    render() {
        const contents = <Layout />

        return (
            <div className="app">
                <div className="header">
                    <Header />
                </div>
                <div className="contents">
                    <Layout />
                </div>
            </div>
        )
    }
}

export default App;