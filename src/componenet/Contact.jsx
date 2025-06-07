const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2 m-5"
      style={{ borderRaduis: "20px", border: "1px solid #555" }}
    >
    
      <div className="col-6">
        <h3 className="text-primary">{props.contacts.name}</h3>
        <p className="text-secondary">{props.contacts.phone}</p>
        <p className="text-secondary">{props.contacts.email}</p>
      </div>
      <div className="col-2">
        <butoon
          className={`btn btn-sm-1 m-1 ${
            props.contacts.favorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.handelToggleFavorite(props.contacts)}
        >
          <i class="bi bi-star"></i>
        </butoon>
      </div>
      <div className="col-2">
        <butoon className="btn btn-sm-1 m-1 btn-danger" onClick={() => props.handelDeleteContact(props.contacts)}>
          <i class="bi bi-trash"></i>
        </butoon>
        <button className="btn btn-sm-1 m-1 btn-primary">
          <i class="bi bi-pencil-square"></i>
        </button>

      </div>
    </div>
  );
};
export default Contact;
