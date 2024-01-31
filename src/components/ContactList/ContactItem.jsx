import PropTypes from 'prop-types';

const { Component } = require('react');

class ContactItem extends Component {
  render() {
    const { name, tel, onClick } = this.props;
    return (
      <div>
        <p>
          {name}:{tel}
        </p>

        <button type="button" onClick={onClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
