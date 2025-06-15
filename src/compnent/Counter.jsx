import { useState } from "react";
const Counter = () => {
  const [countStat, setcountStat] = useState(()=>
    {
        return{counter:10}
    });
    const [tital,setTitel]=useState('fun');
  function IncremantCounter() {
    setcountStat((prevstat)=>
        {
            return{...prevstat,counter : prevstat.counter+1}
        })
  }
  function DecremantCounter() {
  setcountStat((prevstat)=>
        {
            return{...prevstat,counter : prevstat.counter-1}
        })
  }
  return (
    <div className="col-12 border text-white col-md-2 offset-md-5">
      <span className="h2 text-white-50  pt-4 m-2">{tital} Counter</span>
      <button className="btn btn-success m-1" onClick={IncremantCounter}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={DecremantCounter}>
        -1
      </button>

      <span className="h4">
        Counter:
        <span className="text-success">{countStat.counter}</span>
      </span>
    </div>
  );
};
export default Counter;
