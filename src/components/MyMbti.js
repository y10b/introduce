import React from 'react';

const MyMbti = ({ mbtiType }) => {
  return (
    <div className="my-mbti">
        <br/>
      <p>제 MBTI는 <span className='mbti'>{mbtiType}</span> 입니다.</p>
    </div>
  );
};

export default MyMbti;
