import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
  const navigat = useNavigate();

  return (
    <div className="text-white">
      Product
      <br />
      <button
        onClick={() => {
          navigat("/cryptodetail/123/ddd");
        }}
      >
        Go to About bage
      </button>
      <br />
      <Link to={"/cryptodetail/0000/ddd"}>
        <button> go to </button>
      </Link>
      <br />
    </div>
  );
}

export default Product;
