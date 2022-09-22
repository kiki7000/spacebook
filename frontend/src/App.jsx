import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

import Main from "./pages/Main";
import Recommends from "./pages/Recommends";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Project from "./pages/Project";
import Callback from "./pages/Callback";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <NavBar />
                <div className="mb-auto flex-grow">
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/recommends" component={Recommends} />
                        <Route path="/explore" component={Explore} />
                        <Route path="/search" component={Search} />
                        <Route path="/login" component={Login} />
                        <Route path="/user/:name" component={UserProfile} />
                        <Route path="/project/:id" component={Project} />
                        <Route path="/callback" component={Callback} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
