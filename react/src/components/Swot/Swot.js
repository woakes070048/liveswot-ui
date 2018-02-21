import React, { Component } from 'react';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Icon/style.css';
import 'preact-material-components/Button/style.css';

import './style.css';
import SwotCard from './components/SwotCard';

export default class Swot extends Component {
	render() {
		return (
			<div className="mdc-layout-grid__inner">
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType='strength'/>
				</div>
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType='weakness'/>
				</div>
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType='opportunity'/>
				</div>
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType='threat'/>
				</div>
			</div>
		);
	}
}
