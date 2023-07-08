import { useEffect, useRef, useState } from 'react'
import { useLocation,useNavigate } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import letterAtom from '../recoil/letterAtom'
import Button from './Button'

const Header = () => {
  const [titleText, setTitleText] = useState('')
  const [leftChild, setLeftChild] = useState('')
  const [rightChild, setRightChild] = useState('')
  const [leftPageMove, setLeftPageMove] = useState('')
  const [rightPageMove, setRightPageMove] = useState('')
  const letterState = useRecoilValue(letterAtom)
  const location = useLocation()
  const navigate = useNavigate()
  const letterTextarea = useRef();
useEffect(()=>{
  if(location.pathname === '/'){
    setTitleText('HOME')
    setLeftChild('')
    setRightChild('')
  }
  if(location.pathname === '/letter'){
    setTitleText('항해가 끝난 나에게 쓰는 편지')
    setLeftChild('뒤로가기')
    setRightChild('저장하기')
    setLeftPageMove('/')
    setRightPageMove('/certification')
  }
  if(location.pathname === '/certification'){
    setTitleText('이메일 인증')
    setLeftChild('편지 수정 하기')
    setRightChild('')
    setLeftPageMove('/letter')
  }
  if(location.pathname === '/cheeringMessage'){
    setTitleText('항해 선원들에게 응원글을 남겨주세요.')
    setLeftChild('Home')
    setRightChild('')
    setLeftPageMove('/')
  }
  if(location.pathname === '/completion'){
    setTitleText('인증완료')
    setLeftChild('')
    setRightChild('응원글 쓰러 가기')
    setRightPageMove('/cheeringMessage')
  }
},[location.pathname])
  const goBackBtnHandler = (page) => {
    navigate(page.leftPageMove)
  }
  const goPrevBtnHandler = (page) => {
    if(letterState.length === 0){
      return;
    }
    navigate(page.rightPageMove)
  }
  return (
    <MainHeader>
      {leftChild ?
      <Button onClick={()=>goBackBtnHandler({leftPageMove})}>{leftChild}</Button>:<GapSpan/>}
      <p>{titleText}</p>
      {rightChild ?
      <Button ref={letterTextarea} onClick={()=>goPrevBtnHandler({rightPageMove})}>{rightChild}</Button>:<GapSpan/>}
    </MainHeader>
  )
}

export default Header

const MainHeader = styled.header`
  height:10vh;
  display: flex;
  align-items: center;
  justify-content:space-between;
  white-space: nowrap;

  border-bottom: 1px solid #e2e2e2;
  font-size:30px;
  padding-left:20px;
  padding-right:20px;
`
const GapSpan = styled.span`
  width:82px
`