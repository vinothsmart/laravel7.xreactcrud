import React from 'react';
import ReactDOM from 'react-dom';

export default function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Landing Component</div>

                        <div className="card-body">I'm an landing component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
