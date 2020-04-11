import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default function Index() {
    return (
        <div className="container">
            <Header />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Landing Component</div>

                        <div className="card-body">I'm an landing component!</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
