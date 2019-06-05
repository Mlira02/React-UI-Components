import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/HeaderComponents/HeaderContainer';
import Body from './components/CardComponents/CardContainer';

function Index() {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

export default Index;
ReactDOM.render(<App />, document.getElementById('root'));
