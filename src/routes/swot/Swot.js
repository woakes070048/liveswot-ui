import React, { Component } from 'react';

import SwotCard from '../../components/SwotCard';
import SwotHeader from '../../components/SwotHeader';


export default class Swot extends Component {
	render() {
		return (
			<div>
				<SwotHeader/>
				<div className='row'>
					<div className='col m6 s12'>
						<SwotCard cardType='strength'/>
					</div>
					<div className='col m6 s12'>
						<SwotCard cardType='weakness'/>
					</div>
				</div>
				<div className='row'>
					<div className='col m6 s12'>
						<SwotCard cardType='opportunity'/>
					</div>
					<div className='col m6 s12'>
						<SwotCard cardType='threat'/>
					</div>
				</div>
			</div>
		);
	}

  componentDidMount() {
	  this.props.onMountFetchItems();
	  this.props.onMountFetchVotes();
  }
}
