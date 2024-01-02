import React from "react";
import ContactsArea from "./ContactsArea";
import AddContact from "./AddContact";
import UpdateContact from "./UpdateContact";
export default function Main({
  contactDetails,
  id,
  isUpdate,
  setIsUpdate,
  name,
  setName,
  email,
  setMail,
  phone,
  setPhone,
  setContactDetails,
  onUpdate,
  onDelete,
}) {
  return (
    <div className='Display'>
      {contactDetails.length === 0 ? (
        <h2 className='Sorry' style={{ textAlign: "center" }}>
          Sorry Nothing to dispaly
        </h2>
      ) : (
        <ContactsArea
          contactDetails={contactDetails}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}

      {isUpdate ? (
        <UpdateContact
          id={id}
          setIsUpdate={setIsUpdate}
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          name={name}
          setName={setName}
          email={email}
          setMail={setMail}
          phone={phone}
          setPhone={setPhone}
        />
      ) : (
        <AddContact
          className='g-col-6'
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
        />
      )}
    </div>
  );
}
