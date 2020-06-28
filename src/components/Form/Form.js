import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  namberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="number"
              name="number"
              id={this.namberInputId}
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contakt</button>
        </form>
        <p>Contacts</p>
        <ul>
          {this.props.options.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => this.props.onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Form;
