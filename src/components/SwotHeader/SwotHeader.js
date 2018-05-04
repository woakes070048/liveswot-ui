import React from 'react';
import styles from './styles';
import './styles.css';

const props = {
  title: 'Swot Title',
  description: 'Swot Description ...',
};

const DropDown = ({active}) => {
  const items = [{
    text: 'one',
    icon: 'edit'
  }, {
    text: 'two',
    icon: 'close',
  }, {
    text: 'three',
    icon: 'add',
    iconColor: 'blue',
  }];

  return (
    <ul style={styles.dropDown(active)}>
      {items.map((item) => (
        <li>
          <a href="#">
            <div style={styles.li}>
              <span style={styles.liSpan}>
                {item.text}
                <i
                  id={`kebab`}
                  className={`material-icons right`}
                  style={styles.dropDownItemIcon(item.iconColor)}
                >
                  {item.icon}
                </i>
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

class SwotHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  hideDropDown = (event) => {
    if (event.target.id !== 'kebab') {
      this.setState({active: false});
    }
  };

  toggleDropDown = () => {
    this.setState({active: !this.state.active});
  };

  componentDidMount() {
    document.addEventListener('click', this.hideDropDown)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideDropDown);
  }

  render() {
    const {title, description} = props;

    console.log('active: ' + this.state.active);

    return (
      <div className={`row`} style={styles.root}>
        <div className={`col m12`}>
          <div className={`card`} style={styles.card}>
            <div className={`card-content`}>
              <span className={`card-title activator`}>
                {title}
                <i
                  id={`kebab`}
                  className={`material-icons right`}
                  onClick={() => {console.log('click!'); this.toggleDropDown();}}
                >
                  more_vert
                </i>
              </span>
              <p>{description}</p>
              <DropDown active={this.state.active}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SwotHeader;