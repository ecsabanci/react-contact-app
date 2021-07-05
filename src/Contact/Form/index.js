import { useState, useEffect } from "react";

const initialValues = { full_name: "", phone: "" };

const Form = ({ addContacts, contacts }) => {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const onSubmit = (e) => {
    if (form.full_name === "" || form.phone === "") {
      return false;
    }
    e.preventDefault();

    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit} className="d-flex flex-column align-items-start">
      <label className="d-flex flex-column align-items-start" htmlFor="">
        <h4>Full Name</h4>
        <input
          name="full_name"
          value={form.full_name}
          onChange={onChangeInput}
        />
      </label>
      <label className="d-flex flex-column align-items-start" htmlFor="">
        <h4>Phone</h4>
        <input name="phone" value={form.phone} onChange={onChangeInput} />
      </label>
      <button>Add</button>
    </form>
  );
};

export default Form;
