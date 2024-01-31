const { Component } = require('react');

class Search extends Component {
  render() {
    const { value, handler } = this.props;
    return (
      <div>
        <h3>Find contacts ny name</h3>
        <input type="text" value={value} onChange={handler} />
      </div>
    );
  }
}

export default Search;
