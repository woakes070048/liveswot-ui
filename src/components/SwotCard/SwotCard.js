import React from 'react';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import { TextField, Card, CardTitle, CardText } from 'react-md';
import { List, ListItem } from 'react-md';
import PropTypes from 'prop-types';

import VoteButton from '../VoteButton/index';
import { localizedText } from '../../utils/index';
import {getVoteValue} from "../../selectors/votes/getVotes";


const SwotCard = ({
                    user,
                    swotId,
                    items,
                    text,
                    cardType,
                    votes,
                    voteValues,
                    onChange,
                    onSubmit
}) => {

  const isActive = (user, votes, swotItemId) => (votes
    .filter((vote) => (
      vote.creatorId === user.userId &&
      vote.swotItemId === swotItemId
    ))
    .length == 1
  );

  return (
    <div>
      <form method="POST" onSubmit={ (e) => {
        e.preventDefault();
        onSubmit(swotId, text, cardType);
      } }>
        <TextField
          id="id-is-required"
          onChange={ onChange }
          value={ text }
          label={ localizedText().swot.cardType[cardType] }
          lineDirection="center"
          placeholder={`Add ${localizedText().swot.cardType[cardType]}`}
        />
      </form>
      <Card className='swot-card'>
        <CardText>
          {
            (items.length > 0 &&
            <List>
              {
                items.map((item, index) => (
                  <ListItem
                    key={ index }
                    primaryText={
                      `${item.swotItemId}: ${item.text} ${isActive(user, votes, item.swotItemId)}`
                    }
                    secondaryText={ `brownbear` }
                    rightIcon={[
                      <div>{voteValues[item.swotItemId]}</div>,
                      <VoteButton swotItemId={item.swotItemId} key={0} voteType='up'/>,
                      <VoteButton swotItemId={item.swotItemId} key={1} voteType='down'/>,
                    ]}
                  >
                  </ListItem>
                ))
              }
            </List>)
            || <CardTitle title={ localizedText().swot.cardType[cardType] } />
          }
        </CardText>
      </Card>
    </div>
  );
};

SwotCard.propTypes = {
  swotId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  cardType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SwotCard;
