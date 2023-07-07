import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import useInput from '../components/useInput';

const Certification = () => {
  const [sandEmail,onChangeSandEmail] = useInput();
  const [authKey,onChangeAuthKey] = useInput();
  const [isEmail,setIsEmail] = useState(false)

  const sandEmailBtnHandler = () => {

  }
  const authKeyBtnHandler = () => {

  }

  return (
    <Section>
      <div>
        <CertificationInfoP>해당 이메일은 편지를 받을 이메일입니다.</CertificationInfoP>
        <SandBoxDiv>
          <CertificationInput value={sandEmail} onChang={onChangeSandEmail} placeholder="이메일을 적어주세요."/>
          <Button onClick={sandEmailBtnHandler}>인증번호 발송</Button>
        </SandBoxDiv>
        {isEmail &&
        <SandBoxDiv>
          <CertificationInput value={authKey} onChang={onChangeAuthKey} placeholder="인증번호를 적어주세요."/>
          <Button onClick={authKeyBtnHandler}>인증번호 확인</Button>
        </SandBoxDiv>}
      </div>
    </Section>
  )
}

export default Certification

const Section = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
`
const CertificationInfoP = styled.p`
  margin-top:200px;
  margin-left:5px;
  font-size:20px;

`
const SandBoxDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap:10px;

  margin-top:30px;
`
const CertificationInput = styled.input`
  width:200px;
  height: 40px;
  border-radius:10px;
  border: 1px solid #ccc;
  font-size:20px;
  text-indent: 13px;

  &:focus {
    outline: 1px solid gray;
    transition:0.2;
  }
`