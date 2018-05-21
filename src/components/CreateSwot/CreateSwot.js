import React from 'react';
import styles from './styles';

class CreateSwot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.clear = this.clear.bind(this);
    this.edit = this.edit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.refs.title.value,
      this.refs.description.value,
    );
    this.clear();
  }

  cancel() {this.setState({isEdit: false});}

  edit() {this.setState({isEdit: true});}

  clear() {
    this.refs.title.value = '';
    this.refs.description.value = '';
  }

  render() {
    const {isEdit} = this.state;

    let component = (
      <form method={`POST`} onSubmit={this.submit}>
        <input type={`text`} ref={`title`} placeholder={`SWOT Title`}/>
        <input type={`text`} ref={`description`} placeholder={`Description`}/>
        <input type={`submit`} style={{display: 'none'}}/>
        <button className={`btn`} style={styles.submitButton} onClick={this.submit}>
          create
        </button>
        <button className={`btn`} style={styles.cancelButton} onClick={() => this.cancel()}>
          cancel
        </button>
      </form>
    );

    if (!isEdit) {
      component = (
        <button className={`btn`} style={styles.button} onClick={this.edit}>
          create new swot
        </button>
      );
    }

    return (
      <div className={`row ${isEdit ? 'card' : ''}`} style={styles.container}>
        <div className={`col s0 m2 l2`}></div>
        <div className={`col s12 m8 l8`} style={styles.alignCenter}>
          {component}
        </div>
        <div className={`col s0 m2 l2`}></div>
      </div>
    );
  }
}

CreateSwot.protoTypes = {};

export default CreateSwot;