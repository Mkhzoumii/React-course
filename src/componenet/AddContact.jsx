import React from 'react';
class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    errorMassage: "",
    successMassage: "",
    };
   
  }
  handelAddContactformSubmit = (event) =>
     {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        this.props.handelAddContact({name : name , email: email, phone: phone});
        
     }
  render() {
  return (
    <div className="col-12 border text-light m-5">
      <form className="row p-2" onSubmit={this.handelAddContactformSubmit}>
      <div className="row p-2">
        <div className=" col-12 text-light">Add new contact</div>
        <div className="col-12 col-md-4 p-1">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Enter Name"
            name='name'
          />
        </div>
        <div className="col-12 col-md-4 p-1">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Enter Email"
            name='email'
          />
        </div>
        <div className="col-12 col-md-4 p-1">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Enter Phone"
            name='phone'
          />
        </div>
        <div className="row">
          <button className="btn btn-primary my-2">Add Contact</button>
        </div>
      </div>
      </form>
    </div>
  );
};
}
export default AddContact;
