import PropTypes from 'prop-types';
import ContactList from 'components/ContactList';
import { Component } from 'react';

class Contacts extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <div>
        {children}
        <ContactList {...rest} />
      </div>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  children: PropTypes.node,
};
