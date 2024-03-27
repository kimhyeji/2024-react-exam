import React, { useState, useMemo } from 'react';

function isPrimeNumber(no) {
  for ( let i = 2; i < no; i++ ) {
      if ( i * i > no ) {
          break;
      }
      
      if ( no % i == 0 ) {
          return false;
      }
  }
  
  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];
  
  for ( let i = 2; i <= max; i++ ) {
      if ( isPrimeNumber(i) ) {
          primeNumbers.push(i);
      }
  }
  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

export default function App() {
  const [inputNo, setInputNo] = useState(0);

  const primeNumbersCount = useMemo(() => getPrimeNumbersCount(inputNo), [inputNo]);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.number.value = form.number.value.trim();

    if ( form.number.value.length == 0 ) {
      alert("숫자를 입력해주세요");
      form.number.focus();

      return;
    }

    const number = form.number.valueAsNumber;
    form.number.focus();

    setInputNo(number);
  }


  return (
    <>
    <form onSubmit={onSubmit}>
      <input type="number" name="number" placeholder='숫자를 입력해주세요' defaultValue="0"/>
      <input type="submit" className='btn'value="확인"/>
      <hr />
      <div>소수의 개수 : {primeNumbersCount}</div>
    </form>
    </>
  );
}