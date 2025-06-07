import Contact from "./Contact";
const FavoriteContact = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact
          contacts={contact}
          key={index}
          handelToggleFavorite={props.handelToggleFavorite}
          handelDeleteContact={props.handelDeleteContact}
        ></Contact>
      ))}
    </div>
  );
};
export default FavoriteContact;
