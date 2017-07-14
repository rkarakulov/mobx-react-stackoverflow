import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		return (
			<div className="page home">
				<header>
					<div className="hero-unit">
						<div className="react-logo" />
                        <h1>Find all what you want on Stackoverflow</h1>
					</div>
					<div className="hero-subunit">
						<h4>
                            You find here all answers for all your questions!
						</h4>
					</div>
					<div className="github-buttons">
                        <input type="text" width="100%"/>
                        <button>Search</button>
					</div>
				</header>
				<main>
				</main>
			</div>
		);
	}
}
