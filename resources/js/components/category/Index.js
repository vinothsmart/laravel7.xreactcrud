import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from './Add';
import Listing from './Listing';

export default function Index() {
    return (
        <div>
            <Router>
                <div>
                    <hr/>
                    <Link to="/superadmin/category" className="btn btn-primary mr-1 mb-5">Listing</Link>
                    <Link to="/superadmin/category/add" className="btn btn-primary mb-5">Add</Link>
                    <Route exact path="/superadmin/category" component={Listing} />
                    <Route exact path="/superadmin/category/add" component={Add} />
                </div>
            </Router>
        </div>
    );
}
