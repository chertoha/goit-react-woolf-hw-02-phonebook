import { Component } from 'react';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;

    if (contacts.length === 0) return <p>There are no contacts here!</p>;

    return (
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
