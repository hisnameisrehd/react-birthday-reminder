import React, { useState } from 'react';
import { birthdays } from './Data';

const BirthdayInfo = () => {
  const [bdayNumber, setBdayNumber] = useState(birthdays.length);
  const [celebrants, setCelebrants] = useState(birthdays);

  const deleteAll = () => {
    setBdayNumber(0);
    setCelebrants('');
  };

  return (
    <>
      <h1>Birthday reminder</h1>

      <p>{bdayNumber} birthdays today</p>

      {celebrants &&
        celebrants.map((celebrant) => {
          const { id, name, age, url } = celebrant;

          return (
            <div key={id}>
              <img src={url} alt='person' />
              <p>{name}</p>
              <p>{age} years old</p>
            </div>
          );
        })}

      <button onClick={deleteAll}>clear all</button>
    </>
  );
};

export default BirthdayInfo;
