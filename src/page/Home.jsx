import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const Home = () => {
  const navigate = useNavigate()
  const moveLetterEditorBtnHandler = () => {
    navigate('/letter')
  }
  const moveCheeringBtnHandler = () => {
    navigate('/cheeringMessage')
  }
  return (
    <HomeMain>
      <Title>
        항해99 14기 <br /> TimeCapsule
      </Title>
      <p>
        편지쓰러 가기
        <Button type="move" onClick={moveLetterEditorBtnHandler}>
          go
        </Button>
      </p>
      <p>
        항해 동료들에게 응원글 남기기
        <Button type="move" onClick={moveCheeringBtnHandler}>
          go
        </Button>
      </p>
    </HomeMain>
  )
}

export default Home

const HomeMain = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  p {
    font-size: 30px;
    display: flex;
    gap: 20px;
  }
`
const Title = styled.h1`
  margin-top: 100px;
  font-size: 70px;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
`
