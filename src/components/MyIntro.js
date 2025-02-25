import React from 'react';

const MyIntro = ({ intro}) => {
  return (
    <div className="my-intro">
        <br/>
      <h2>👋안녕하세요</h2>
      <p>{intro}</p>
    </div>
  );
};

export default MyIntro;
