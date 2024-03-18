import React, { useState } from 'react';

export default function App() {
  const [no, setNo] = useState(0);

  const [recordedNo, setRecordedNo] = useState([]);
  
  const saveNo = () => {
    if ( no == '' ) {
      alert('숫자를 입력해주세요.');
      return;
    }

    setRecordedNo([...recordedNo, no]);
    setNo('');
  }

  const li = recordedNo.map((el, index) => <li key={index}>{el}</li>);

  return <>
    <form onSubmit={(e) => {
      e.preventDefault();
      saveNo();
    }}>
      <input type="number" className="input input-bordered" value={no} onChange={(e) => setNo(e.target.valueAsNumber)}/>
      <button type="submit" className="btn">기록</button>
    </form>


    <hr />

    <div className='text-2xl'>기록된 숫자 : v1</div>
    {recordedNo.join(', ')}

    <div className='text-2xl'>기록된 숫자 : v2</div>
    <ul>{li}</ul>

    <div className='text-2xl'>기록된 숫자 : v3</div>
    <ul>
      {recordedNo.map((el, index) => <li key={index}>{el}</li>)}
    </ul>

  </> 
}