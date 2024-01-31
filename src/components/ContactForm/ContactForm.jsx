import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState(state => ({ ...state, [name]: value }));
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const { addContact } = this.props;
    const { name, tel } = e.target.elements;

    addContact({ id: nanoid(4), name: name.value, tel: tel.value });
  };

  render() {
    const { name, tel } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChangeHandler}
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="tel"
            pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={tel}
            onChange={this.onChangeHandler}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
