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
