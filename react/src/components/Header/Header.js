import React, { Component } from 'react';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Icon/style.css';
import { Toolbar, Button } from 'react-md';

import { localizedText } from '../../utils';

export default class Header extends Component {
	render() {
		return (
			<Toolbar
				nav={<Button icon>menu</Button>}
				colored
				title={ localizedText().title }
			>
			</Toolbar>
		);
	}
}
