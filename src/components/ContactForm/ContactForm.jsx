import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    console.log(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    const nameInputId = 'nameInput';
    const numberInputId = 'numberInput';
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor={nameInputId} className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id={nameInputId}
            aria-describedby="emailHelp"
            required
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor={numberInputId} className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            className="form-control"
            id={numberInputId}
            required
            value={number}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </Form>
    );
  }
}

export default ContactForm;
