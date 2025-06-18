import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function CryptoDetail() {
  const { cryptoSympol, id } = useParams();
  const navigate =useNavigate();
  return (
    <div className="text-white">
      CryptoDetail
      <p> Post : {cryptoSympol}</p>
      <p> id : {id}</p>
      <br/>
      <button onClick={()=>navigate(-1)}>back </button>
      <br/>
      <Link to={'/createproduct'}>
      <button> go to createproduct </button>
      
      </Link>

    </div>
  );
}

export default CryptoDetail;
