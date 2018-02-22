import React from 'react';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';

import './style.css';
import { localizedText } from '../../../../utils';

const SwotCard = (props) => {
  return (
    <div>
      <form method="POST" onSubmit={ (e) => {
        e.preventDefault();
        props.onSubmit(props.text, props.cardType);
      } }>
        <input
          type="text"
          placeholder={ localizedText().swot.cardType[props.cardType] }
          className="input-fullwidth"
          value={ props.text }
          onChange={ props.onChange }
          />
        <div className="mdc-line-ripple"></div>
      </form>
      <div className="my-card mdc-card">
        <div className="mdc-card__media--content">
          <ul className="mdc-list mdc-list--two-line mdc-list--dense mdc-list--avatar-list swot-list">
            {
              props.items.map((item, index) => (
                <li key={ index } className="mdc-list-item">
                  <span className="mdc-list-item__text"> { item.text }
                    <span className="mdc-list-item__secondary-text"> brownbear </span>
                  </span>
                  <a
                    className="mdc-list-item__meta material-icons"
                    href=""
                    aria-label="Remove from favorites"
                    title="Remove from favorites"
                    onClick={ (e) => { e.preventDefault() } }>
                    favorite
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SwotCard;
