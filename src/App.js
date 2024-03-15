import React, { useState } from 'react';

export default function App() {
  const border = '10px solid red';
  const [popupVisible, setPopupVisible] = useState(true);

  return <>
    <button className='btn' onClick={() => setPopupVisible(!popupVisible)}>
      팝업{popupVisible ? "닫기" : "열기"}
    </button>
    <div className='my-5 border'></div>
    {popupVisible && <div style={{width: 100, height: 100, border}}></div>}
  </>
}