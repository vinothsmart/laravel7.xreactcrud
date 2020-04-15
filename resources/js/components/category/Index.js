import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from './Add';
import Listing from './Listing';

export default function Index() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/superadmin/category">Listing</Link>
                    <Link to="/superadmin/category/add">Add</Link>
                    <Route exact path="/superadmin/category" component={Listing} />
                    <Route exact path="/superadmin/category/add" component={Add} />
                </div>
            </Router>
        </div>
    );
}
