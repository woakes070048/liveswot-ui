import React from 'react';
import { Button, FontIcon } from 'react-md';

const VoteButton = ({ type, isActive, vote }) => (
  <span>
    <Button
      icon
      onClick={ () => { console.log('voted!'); } }
      iconEl={
        <FontIcon
          secondary={ isActive }
          >
          { type === 'up' ? `arrow_drop_up` : `arrow_drop_down` }
        </FontIcon>
    } />
    { vote }
  </span>
);

export default VoteButton;
