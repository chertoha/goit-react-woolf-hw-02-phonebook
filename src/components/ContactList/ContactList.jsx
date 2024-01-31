import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const { Component } = require('react');

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    if (contacts.length === 0) return <p>No contacts</p>;

    return (
      <ul>
        {contacts.map(({ id, ...rest }) => (
          <li key={id}>
            <ContactItem
              {...rest}
              onClick={() => {
                onDelete(id);
              }}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
