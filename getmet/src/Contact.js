import React from "react";
export default function Contact({ contact, onUpdate, onDelete }) {
  return (
    <li className="ListItem">
      <div className="contactDetails">
        <p>🧑🏻{contact.name}</p>
        <p>📞{contact.phone}</p>
        <p>📧 {contact.email}</p>
      </div>
      <div className="Buttons">
        <button onClick={() => onUpdate(contact.id)}>
          <span>✏️</span>
        </button>
      </div>
      <div className="Buttons">
        <button onClick={() => onDelete(contact.id)}>
          <span>❌</span>
        </button>
      </div>
    </li>
  );
}
