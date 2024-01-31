import PropTypes from 'prop-types';
import { Field, Heading, Wrapper } from './Search.styled';
const { Component } = require('react');

class Search extends Component {
  render() {
    const { value, handler } = this.props;
    return (
      <Wrapper>
        <Heading>Find contacts ny name</Heading>
        <Field type="text" value={value} onChange={handler} />
      </Wrapper>
    );
  }
}

export default Search;

Search.propTypes = {
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
