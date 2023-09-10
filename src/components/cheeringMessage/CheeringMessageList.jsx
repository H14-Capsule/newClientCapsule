import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { cheeringMessageList } from '../../api/cheering'

const CheeringMessageList = () => {
  const { data, isError } = useQuery('cheeringMessageList', cheeringMessageList)

  return (
    <CheeringMessageListSection>
      {data?.map((item) => {
        return (
          <BackgroundDiv>
            <MessageItemDiv>
              <label>작성자</label> : <span>{item.nickname}</span>
            </MessageItemDiv>
            <MessageItemDiv>
              <label>내용</label> : <span>{item.content}</span>
            </MessageItemDiv>
          </BackgroundDiv>
        )
      })}
    </CheeringMessageListSection>
  )
}

export default CheeringMessageList

const CheeringMessageListSection = styled.section`
  display: flex;
  flex-direction: column;
`
const BackgroundDiv = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  line-height: 20px;
  background-color: #f6f2f283;
  gap: 10px;
  label {
    width: 50px;
  }
  span {
    padding-left: 10px;
    width: 500px;
  }
  &:hover {
    border: 1px solid #ccc;
    transition: 0.2;
  }
`
const MessageItemDiv = styled.div`
  display: flex;
  flex-direction: row;
`
