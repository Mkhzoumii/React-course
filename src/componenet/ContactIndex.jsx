import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";
import Header from "./Header";
class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "John Doe",
          phone: "123-456-7890",
          email: "john@yahoo.com",
          favorite: false,
        },
        {
          id: 2,
          name: "abdullah Smith",
          phone: "987-654-3210",
          email: "abdullah@yahoo.com",
          favorite: true,
        },
        {
          id: 3,
          name: "waleed Doe",
          phone: "555-555-5555",
          email: "waleed@yahoo.com",
          favorite: false,
        },
      ],
    };
  }
  handelAddContact = (formcontact) => {
    if (formcontact.name == "") {
      alert("Please Enter Name");
      return { status: false, message: "Name is required" };
    } else if (formcontact.phone == "") {
      alert("Please Enter Phone");
      return { status: false, message: "Phone is required" };
    }
    const dublicateContact = this.state.contactList.filter((x) => {
      if (
        x.name == formcontact.name ||
        x.phone == formcontact.phone ||
        x.email == formcontact.email
      )
        return true;
    });
    if (dublicateContact.length > 0) {
      alert("Contact already exists");
    } else {
      const newContact = {
        ...formcontact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        favorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newContact]),
        };
      });
      alert("Contact Added");
    }
  };
  handelToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, favorite: !obj.favorite };
          }
          return obj;
        }),
      };
    });
  };
  handelDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => obj.id != contact.id),
      };
    });
    alert("Contact Deleted");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="contener" style={{ minHeight: "100vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact></AddRandomContact>
            </div>
            <div className="col-4">
              <RemoveAllContact></RemoveAllContact>
            </div>
            <div className="row py-2 ">
              <AddContact handelAddContact={this.handelAddContact}></AddContact>
            </div>
            <div className="row py-2">
              <FavoriteContact
                contacts={this.state.contactList.filter(
                  (u) => u.favorite == true
                )}
                handelToggleFavorite={this.handelToggleFavorite}
                handelDeleteContact={this.handelDeleteContact}
              />
            </div>
            <div className="row py-2">
              <GeneralContact
                contacts={this.state.contactList.filter(
                  (u) => u.favorite == false
                )}
                handelToggleFavorite={this.handelToggleFavorite}
                handelDeleteContact={this.handelDeleteContact}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactIndex;
