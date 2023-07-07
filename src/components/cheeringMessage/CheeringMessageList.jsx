import React from 'react'
import styled from 'styled-components'

const dummyData = [
  {
    nickName:'유리',
    content:'후딱 끝내고 싶다.'
  },
  {
    nickName:'유리1',
    content:'후딱 끝내고 싶다.1'
  },
  {
    nickName:'유리2',
    content:'후딱 끝내고 싶다.2'
  },
]
const CheeringMessageList = () => {
  return (
    <CheeringMessageListSection>
      {
        dummyData.map((item)=>{
          return(
          <BackgroundDiv>
            <MessageItemDiv>
              <label>작성자</label> : <p>{item.nickName}</p>
            </MessageItemDiv>
            <MessageItemDiv>
              <label>내용</label> : <p>{item.content}</p>
            </MessageItemDiv>
          </BackgroundDiv>
        )})
      }
    </CheeringMessageListSection>
  )
}

export default CheeringMessageList

const CheeringMessageListSection = styled.section`
  display:flex;
  flex-direction:column;
`
const BackgroundDiv = styled.div`
  margin-top:20px;
  margin-left:20px;
  margin-right:20px;
  height:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-size:25px;
  background-color:#f6f2f283;
  gap:10px;
  label{
    width:50px;
    margin-left:40px;
  }
  p{
    margin-left:10px;
  }
  &:hover {
    border: 1px solid #ccc;
    transition:0.2;
  }
`
const MessageItemDiv = styled.div`
  display:flex;
  flex-direction:row;
`