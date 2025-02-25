import React from 'react';
import MyIntro from './components/MyIntro';
import MyMbti from './components/MyMbti';
import MyName from './components/MyName';
import LikeImg from './components/LikeImg';

import './App.css'

const App = () => {
  const introText = '코드잇 풀스택 6기 수강생';
  const mbtiType = 'ESTJ';
  const name = '김승준';
  const imageUrl = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMTRfMTU1%2FMDAxNzMxNTQyMDY5NDgz.Xp7nxhEQV3_zEl9vO78riF_WIiBSvj5QY4CQtOjdWgQg.JIuWiagytIpOmySq7XeJv0SJ6bnmAfDFAwclkn5jYZsg.JPEG%2FIMG_3748.JPG&type=sc960_832';  // 이미지 URL (예시)
  const imageDescription = '네잎클로버 보고 가세요~' ;

  return (
    <div className="App">
      <MyIntro intro={introText} />
      <MyName name={name} />
      <MyMbti mbtiType={mbtiType} />
      <LikeImg imageUrl={imageUrl} description={imageDescription} />
    </div>
  );
};

export default App;
