import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phone = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const newEntry = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      phone: phone.current.value,
    };

    addEntryToPhoneBook(newEntry); // Add the entry to the phonebook
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        ref={firstName}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        ref={lastName}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        ref={phone}
      />
      <br />
      <button type="submit" style={style.form.submitBtn}>
        Add User
      </button>
    </form>
  );
}

function InformationTable({ userDir }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {userDir.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [userDir, setUserDir] = useState([
    { firstName: 'Coder', lastName: 'Byte', phone: '888888' },
  ]);

  const addEntryToPhoneBook = (newEntry) => {
    setUserDir((prevDir) => [...prevDir, newEntry]); // Update state with new entry
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable userDir={userDir} />
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);