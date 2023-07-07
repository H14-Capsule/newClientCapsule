import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const Home = () => {
  const navigate = useNavigate();
  const moveLetterEditorBtnHandler = () => {
    navigate('/letter')
  }
  const moveCheeringBtnHandler = () => {
    navigate('/cheeringMessage')
  }
  return (
    <HomeMain>
    <Title>항해99 14기 <br/> TimeCapsule</Title>
    <p>편지쓰러 가기
      <Button type='move' onClick={moveLetterEditorBtnHandler}>go</Button>
    </p>
    <p>항해 동료들에게 응원글 남기기
      <Button type='move' onClick={moveCheeringBtnHandler}>go</Button>
    </p>
    </HomeMain>
  )
}

export default Home

const HomeMain = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:70px;
  p {
    font-size:40px;
    display:flex;
    gap:20px;
  }
`
const Title = styled.h1`
margin-top:70px;
font-size:90px;
font-weight:800;
line-height:1.2;
text-align:center;
`
