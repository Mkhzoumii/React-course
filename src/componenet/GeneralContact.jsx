import Contact from "./Contact";

const GeneralContact = (props) => {
  return (
    <div>
      {props.contacts.map((contacts, index) => (
        <Contact
          contacts={contacts}
          key={index}
          handelToggleFavorite={props.handelToggleFavorite}
          handelDeleteContact={props.handelDeleteContact}
        ></Contact>
      ))}
    </div>
  );
};
export default GeneralContact;
