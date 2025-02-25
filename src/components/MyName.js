import React from 'react';

const MyName = ({ name }) => {
  return (
    <div className="my-name">
        <br/>
      <p>제 이름은 <span className='Name'>{name}</span>입니다.</p>
    </div>
  );
};

export default MyName;
