import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import {inject, observer} from "mobx-react";
import DevTools from "mobx-react-devtools";

import TopBar from "../shared/TopBar";
import Routes from "./Routes";
import Footer from "../shared/Footer";

@inject("store")
@observer
export default class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    componentDidMount() {
        this.authenticate();
    }

    authenticate(e) {
        if (e) e.preventDefault();
        this.store.appState.authenticate();
    }

    render() {
        return (
            <div className="wrapper">
                <DevTools />
                <TopBar />
                <Routes />
                <Footer />
            </div>
        );
    }
}
