import React, { Component } from 'react';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Icon/style.css';
import 'preact-material-components/Button/style.css';
import './style.css';
import { localizedText } from '../../utils';

import SwotCard from './components/SwotCard';

export default class Swot extends Component {
	render() {
    console.log('at Swot, props:');
    console.log(this.props);
		return (
			<div className="mdc-layout-grid__inner">
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType={ localizedText().body.swot.strengths }/>
				</div>
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType={ localizedText().body.swot.weaknesses }/>
				</div>
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType={ localizedText().body.swot.opportunities}/>
				</div>
				<div className="mdc-layout-grid__cell--span-6">
					<SwotCard cardType={ localizedText().body.swot.threats }/>
				</div>
			</div>
		);
	}
}
