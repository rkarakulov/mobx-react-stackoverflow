import React, {Component} from "react";
import {inject, observer} from "mobx-react";

@inject("store")
@observer
export default class List extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <div className="page home">
                <main>
                    ... results ...
                </main>
            </div>
        );
    }
}
