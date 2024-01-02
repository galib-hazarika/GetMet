import React from "react";
import { useState } from "react";
export default function UpdateContact({
  id,
  setIsUpdate,
  contactDetails,
  setContactDetails,
  name,
  setName,
  email,
  setMail,
  phone,
  setPhone,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const dataToSubmit = { name, phone, email };
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json ; charset=UTF-8",
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((res) => res.json())
      .then((res) => {
        const newContact = contactDetails.filter((e) => e.id !== id);
        setContactDetails([...newContact, res]);
      });
    setName("");
    setPhone("");
    setMail("");
    setIsUpdate(false);
  }
  return (
    <div className='Form'>
      {/* onSubmit={handleSubmit} */}
      <h3 className='add_form_header'>Update Contact Information</h3>
      <form method='post' action='#' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          name='name'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={phone}
          phone='phone'
          placeholder='Phone'
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type='text'
          value={email}
          email='email'
          placeholder='Email'
          onChange={(e) => setMail(e.target.value)}
        />

        <input type='submit' />
      </form>
    </div>
  );
}
