import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import "./App.css";
import ContactList from "./contactList";

function App() {
  const [contacts, SetContacts] = useState([]);

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    SetContacts(data.contacts);
    console.log(data.contacts);
  };

  return (
    <>
      <ContactList contacts={contacts} />
      <ContactForm />
    </>
  );
}

export default App;
