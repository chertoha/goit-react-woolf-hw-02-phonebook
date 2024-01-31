import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Container from 'components/Container';
import Section from 'components/Section';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = contact => {
    this.setState(state => ({
      ...state,
      contacts: [...state.contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <Container>
          <Section>
            <ContactForm addContact={this.addContact} />
          </Section>
        </Container>

        <Container>
          <Section>
            <Contacts contacts={contacts} />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
