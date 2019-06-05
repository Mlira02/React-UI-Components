import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/HeaderComponents/HeaderContainer';

function I() {
    return (
        <div>
            <Header />
        </div>
    );
}

export default I;
ReactDOM.render(<App />, document.getElementById('root'));
