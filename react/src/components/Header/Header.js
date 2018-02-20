import React, { Component } from 'react';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Icon/style.css';
import { localizedText } from '../../utils';

export default class Header extends Component {
	render() {
		return (
			<header className="mdc-toolbar">
			  <div className="mdc-toolbar__row">
			    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
			      <a href="" className="material-icons mdc-toolbar__menu-icon">menu</a>
			      <span className="mdc-toolbar__title">{ localizedText().header.title }</span>
			    </section>
			  </div>
			</header>
		);
	}
}
