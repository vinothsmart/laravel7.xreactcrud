import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

export default function Header() {
    return (
        <Router>            
            <div>
                <Link to="/superadmin"> Home</Link>
                <Link to="/superadmin/about"> About Us</Link>
                <Route path="/superadmin" component={Home} />
                <Route path="/superadmin/about" component={About} />
            </div>
        </Router>
    );
}
