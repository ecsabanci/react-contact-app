import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Contact = () => {
  const [contacts, setContacts] = useState([
    { full_name: "Emre", phone: "1", id: 0 },
    { full_name: "Cagri", phone: "2", id: 1 },
    { full_name: "Sabanci", phone: "3", id: 2 }
  ]);

  return (
    <div>
      <br />
      <hr />
      Contact
      <Form addContacts={setContacts} contacts={contacts} />
      <List contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default Contact;
