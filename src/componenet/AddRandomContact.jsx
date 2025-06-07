import React from 'react';
import getUser from '../Uitillity/Api';
const GetUser = async()=>
  {
   const userFromApi=await getUser();
   console.log(userFromApi.data);
  }

const AddRandomContact = () => {
  return <button className="btn btn-secondary form-control" onClick={GetUser}>Add  Random Contact</button>;
};
export default AddRandomContact;
