import React, { Component } from 'react';
import 'preact-material-components/List/style.css';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import './style.css';

export default class SwotCard extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <div>
        <div className="mdc-text-field mdc-text-field--box mdc-text-field--fullwidth">
          <input
            type="text"
            id="pre-filled"
            className="mdc-text-field__input"
            value={ this.state.text }
            onChange={
              (e) => this.setState({ text: e.target.value })
            }
            />
          <label className="mdc-text-field__label mdc-text-field__label--float-above" htmlFor="pre-filled">
            Label in correct place
          </label>
          <div className="mdc-line-ripple"></div>
        </div>
        <div className="my-card mdc-card">
          <div className="mdc-card__media--content"> { this.props.cardType }
          </div>
          <div className="mdc-card__media--content">
            <ul className="mdc-list mdc-list--two-line mdc-list--dense mdc-list--avatar-list swot-list">
              {
                [1,2,3,4,5,6,7].map((e) => (
                  <li className="mdc-list-item">
                    <span className="mdc-list-item__text"> Very strong ...
                      <span className="mdc-list-item__secondary-text"> brownbear </span>
                    </span>
                    <a
                      className="mdc-list-item__meta material-icons"
                      href="#"
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
  }
}
