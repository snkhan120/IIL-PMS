import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
    <Router>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about/">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users/">Users</Link>
                </li>
            </ul>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </div>
    </Router>
);

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default AppRouter;