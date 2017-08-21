import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import ItemActions from './data/ItemActions';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

for (let i=0; i<10; i++) {
	if (i % 2 === 0) {
		if (i % 4 === 0) {
			ItemActions.addItem('Item ' + (i + 1), 'strength');
		} else {
			ItemActions.addItem('Item ' + (i + 1), 'weakness');
		}
	} else {
		if (i % 3 === 0) {
			ItemActions.addItem('Item ' + (i + 1), 'opportunity');
		} else {
			ItemActions.addItem('Item ' + (i + 1), 'threat');
		}
	}
}

registerServiceWorker();