import React from 'react';

const LikeImg = ({ imageUrl, description }) => {
  return (
    <div className="like-img">
        <br></br>
      <img src={imageUrl} className='Img' alt="좋아하는 사진"/>
      <p>{description}</p>
    </div>
  );
};

export default LikeImg;
