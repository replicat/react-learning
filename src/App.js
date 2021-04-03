import React from 'react';
import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
        return (
            <div className="app bp3-dark">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <Main />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;