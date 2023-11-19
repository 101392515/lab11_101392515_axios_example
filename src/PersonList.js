// Import necessary packages
import React, { Component } from 'react';
import axios from 'axios';


class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=2`)
      .then((res) => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  showDetails(person) {
    console.log('Details button clicked:', person);
    // Implement the details functionality here, like opening a modal or another page
  }

  render() {
    return (
      <div className="container">
        {this.state.persons.map((person) => (
          <div className="user-card" key={person.login.uuid}>
            <img className="user-image" src={person.picture.large} alt={`Portrait of ${person.name.first} ${person.name.last}`} />
            <div className="user-info">
              <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
              <p><strong>User Name:</strong> {person.login.username}</p>
              <p><strong>Gender:</strong> {person.gender}</p>
              <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
              <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}</p>
              <p><strong>Email:</strong> {person.email}</p>
              <p><strong>Birth Date and Age:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age} years)</p>
              <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
              <p><strong>Phone:</strong> {person.phone}</p>
              <p><strong>Cell:</strong> {person.cell}</p>
              <button onClick={() => this.showDetails(person)}>Details</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;