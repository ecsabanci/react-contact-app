import { useState, useEffect } from "react";

const List = ({ contacts, setContacts }) => {
  const [filterText, setFilterText] = useState("");

  useEffect(() => {}, [contacts]);

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  const deleteContact = (e) => {
    // let deletedItem = contacts.splice(, 1);
    let newContacts = contacts.filter((item) => item !== contacts[e.target.id]);
    setContacts(newContacts);
  };

  return (
    <div className="d-flex flex-column align-items-start mt-5">
      <input
        value={filterText}
        placeholder="Filter"
        onChange={(e) => setFilterText(e.target.value)}
      />
      {filtered.map((contact, index) => (
        <li className="d-flex align-items-center" key={index}>
          {" "}
          {contact.full_name}
          <button
            id={index}
            onClick={deleteContact}
            className="mx-5 bg-danger text-white"
          >
            Delete
          </button>{" "}
        </li>
      ))}
    </div>
  );
};

export default List;
