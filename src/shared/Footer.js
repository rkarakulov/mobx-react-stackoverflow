import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import {Link, Route} from "react-router-dom";

@inject("store")
@observer
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        const { testval } = this.store.appState;

        return (
            <footer>
                {testval}
                <a href="https://twitter.com/mhaagens" target="_blank">
                    @mhaagens
                </a>
                {" "}
                | github:
                {" "}
                <a href="https://github.com/mhaagens" target="_blank">
                    mhaagens
                </a>
            </footer>
        );
    }
}
