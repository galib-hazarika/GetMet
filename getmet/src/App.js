import { useEffect, useState } from "react";
// import { Container Row, Col} from "react-bootstrap";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

// Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

export default function App() {
  const [query, setQuery] = useState("");
  const [contactDetails, setContactDetails] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idNeedtoUpdate, setIdNeedToUpdate] = useState(0);
  // const [updatedContactDetails]
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function handleUpdate(id) {
    const contact = contactDetails.filter((e) => e.id === id);
    const { name, email, phone } = contact[0];
    setIsUpdate(true);
    setIdNeedToUpdate(id);
    setName(name);
    setPhone(phone);
    setEmail(email);
  }
  function handleDelete(id) {
    const updatedContact = contactDetails.filter((movie) => movie.id != id);
    // if (updatedContact.length == 0) {
    //   return <h1>Nothing to display</h1>;
    // }
    setContactDetails(updatedContact);
  }
  useEffect(
    function () {
      async function getAllContact() {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
          const contact_details = await res.json();
          setContactDetails(contact_details);
        } catch (error) {
          console.log(error.message);
        }
      }
      async function getContact() {
        try {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/users?name=${query}`
          );
          const contact_details = await res.json();
          setContactDetails(contact_details);
        } catch (error) {
          console.log(error);
        }
      }
      return () => {
        if (query.length <= 2) {
          getAllContact();
        } else {
          getContact();
        }
        // getAllContact();
      };
    },
    [query]
  );
  return (
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      <Main
        contactDetails={contactDetails}
        id={idNeedtoUpdate}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        name={name}
        setName={setName}
        email={email}
        setMail={setEmail}
        phone={phone}
        setPhone={setPhone}
        setContactDetails={setContactDetails}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}
