import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default function Index() {
    return (
        <div className="container">
            <Header/>
            <Footer/>
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
