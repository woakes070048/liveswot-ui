import React from 'react';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Icon/style.css';
import {Toolbar, Button, Avatar} from 'react-md';

import { localizedText } from '../../utils';

const Header = ({ logout, username, email, profileImg }) => {
	return (
		<Toolbar
			nav={<Button icon>menu</Button>}
			colored
			title={ localizedText().title }
			actions={[
			  <Button raised secondary onClick={logout}>Log out</Button>,
        <Avatar src={profileImg}></Avatar>
      ]}
		>
		</Toolbar>
	);
};

export default Header;