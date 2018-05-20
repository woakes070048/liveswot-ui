import React from 'react';
import styles from './styles';
import './styles.css';
import PropTypes from 'prop-types';
import AddMember from '../../components/AddMember';
import DropDown from './components/DropDown';

class SwotHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      addMemberHidden: true,
      userName: '',
    };

    this.hideAddMember = this.hideAddMember.bind(this);
    this.showAddMember = this.showAddMember.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  hideAddMember() {this.setState({addMemberHidden: true});}

  showAddMember() {this.setState({addMemberHidden: false});}

  updateUserName(e) {this.setState({userName: e.target.value});}

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
    const {title, description, creator, swotDateCreated} = this.props;
    // const swotImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';
    const swotImg = '';

    return (
      <div>
        <div className={`row`} style={styles.root}>
          <div className={`col m12 s12 l12`}>
            <div className={`card`} style={styles.card}>
              <div className={`card-content`} style={styles.cardContent}>
                <div className={`row`} style={{...styles.compactRow, ...styles.layout}}>
                  <div style={styles.left}>
                    <div style={styles.swotImgWrapper}>
                    <span>
                      {(
                        swotImg &&
                        <img
                          alt={title}
                          className='responsive-img'
                          src={swotImg}
                          style={styles.swotImg}
                        />
                      ) || (
                        <div style={styles.swotImgFallbackWrapper}>
                          <div style={styles.swotImgFallback}>
                            ST
                          </div>
                        </div>
                      )}
                    </span>
                    </div>
                  </div>
                  <div style={styles.mid}>
                    <div className={`row`} style={styles.compactRow}>
                      <div className={`row swot-header`} style={styles.compactRow}>
                        <div className={`col s10 m12 l12`} style={styles.navCol}>
                        <span className={`card-title activator`} style={styles.cardTitle}>
                          {title}
                        </span>
                        </div>
                      </div>
                      <div className={`row`} style={styles.compactRow}>
                        <div className={`col s12 m12 l12`} style={styles.navCol}>
                          <span>{description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`swot-header-right`} style={styles.right}>
                  <span className={`card-title activator`}>
                    <span className={`swot-meta`}>
                      created by {creator.userName} at {swotDateCreated}
                    </span>
                    <i
                      id={`kebab`}
                      className={`material-icons right`}
                      onClick={() => this.toggleDropDown()}
                    >
                      more_vert
                    </i>
                  </span>
                  </div>
                </div>
                <DropDown active={this.state.active} showAddMember={this.showAddMember}/>
              </div>
            </div>
          </div>
        </div>
        <AddMember
          hidden={this.state.addMemberHidden}
          hide={this.hideAddMember}
          userName={this.state.userName}
          updateUserName={this.updateUserName}
        />
      </div>
    );
  }
}

SwotHeader.propTypes = {
  creator: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  swotDateCreated: PropTypes.string.isRequired,
};

export default SwotHeader;