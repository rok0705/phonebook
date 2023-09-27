import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log("contactList: ", contactList);
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);

  return (
    <div>
      <SearchBox />
      <div>
        num:{filteredList.length}
        {filteredList.map((contact) => (
          <ContactCard item={contact}></ContactCard>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
