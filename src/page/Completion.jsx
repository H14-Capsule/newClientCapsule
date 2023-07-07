import React from 'react'
import styled from 'styled-components'

const Completion = () => {
  return (
    <CompletionMessage>
        <p>인증이 완료되었습니다.</p>
        <p>해당 편지는 7월 7일에 인증받은 이메일로 발송됩니다.</p> 
        <p>앞으로 남은 항해기간 응원 합니다. 화이팅!!!!!!!</p>
    </CompletionMessage>
  )
}

export default Completion

const CompletionMessage = styled.div`
  margin-top:200px;
  display:flex;
  flex-direction:column;
  text-align:center;

  font-size:30px;
  gap:20px;
`