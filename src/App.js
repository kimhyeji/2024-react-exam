import React, { useState, useRef } from 'react';

export default function App() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    5, 10, 5, 15, 20, 30, 25, 5, 10, 20, 5, 5
  ]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };

  const removeNo = (index) => {
    setRecordedNos(
      recordedNos.filter((_, _index) => _index != index)
    );
  }

  const modifyNo = (index, newNo) => {
    setRecordedNos(
      recordedNos.map((el, _index) => _index == index ? newNo : el)
      );
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <ul>
        {recordedNos.map((el, index) => (
          <li key={index} className='flex'>
            <span className='w-10'>{el}</span>
            <span className='w-10'> : {index}</span>
            <button className='btn btn-primary btn-xs' onClick={() => removeNo(index)}>삭제</button>
            <button className='btn btn-primary btn-xs' onClick={() => modifyNo(index, el + 1)}>+1</button>
            <button className='btn btn-primary btn-xs' onClick={() => modifyNo(index, el - 1)}>-1</button>
            <button className='btn btn-primary btn-xs' onClick={() => modifyNo(index, 10)}>10</button>
          </li>
        ))}
      </ul>
    </>
  );
}