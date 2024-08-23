import React from "react";
import ContactList from "../components/ContactList";
import CreateContact from "../components/CreateContact";

const ContactsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-6 rounded shadow-lg w-96 text-center">
        <CreateContact />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
