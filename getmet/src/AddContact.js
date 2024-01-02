import React from "react";
import { useState } from "react";
export default function AddContact({ contactDetails, setContactDetails }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setMail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const dataToSubmit = { name, phone, email };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json ; charset=UTF-8",
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setContactDetails([...contactDetails, res]);
      });
    setName("");
    setPhone("");
    setMail("");
  }
  return (
    <div class='Form'>
      <h3 className='add_form_header'>Add New Contacts</h3>
      <form method='post' action='#' onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={name}
            name='name'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type='text'
            value={phone}
            phone='phone'
            placeholder='Phone'
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          <input
            type='text'
            value={email}
            email='email'
            placeholder=' Email'
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <input type='submit' />
      </form>
    </div>
  );
}
