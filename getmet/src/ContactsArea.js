import React from "react";
import Contact from "./Contact";
export default function ContactsArea({ contactDetails, onUpdate, onDelete }) {
  return (
    <ul className='List'>
      {contactDetails.map((e) => (
        <Contact contact={e} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}
