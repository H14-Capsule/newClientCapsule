import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Timer = ({ timeLimit, key }) => {
  const [count, setCount] = useState(timeLimit);

  useEffect(() => {
    setCount(timeLimit); // 타이머를 초기화

    const id = setInterval(() => {
      setCount(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        }
        clearInterval(id); // count가 0이 되면 인터벌을 멈춤
        return prevCount;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [timeLimit, key]); // timeLimit과 key를 의존성 배열에 추가

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return <TimerP>{formatTime(count)}</TimerP>;
};

export default Timer;

const TimerP = styled.p`
  font-size:20px;
  line-height:1.5;
  margin-left:10px;
`