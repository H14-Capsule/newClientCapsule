import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { ConfirmationNumber, reSandEmailApi, sandEmailApi } from '../api/certification'
import Button from '../components/Button'
import Timer from '../components/Timer'
import useInput from '../components/useInput'
import certificationAtom from '../recoil/certificationAtom'

const Certification = () => {
  const [sandEmail, onChangeSandEmail] = useInput()
  const [authKey, onChangeAuthKey] = useInput()
  const [isEmail, setIsEmail] = useState(false)
  const [limit, setLimit] = useState(0)
  const [warningMessage, setWarningMessage] = useState('')
  const [emailId, setEmailId] = useState(0)
  const [emailAtom, setEmailAtom] = useRecoilState(certificationAtom)
  const [timerCount, setTimerCount] = useState(0)
  const navigate = useNavigate()

  const sandEmailMutate = useMutation(sandEmailApi, {
    onSuccess: (data) => {
      setWarningMessage('')
      setLimit(180)
      setIsEmail(true)
      setEmailId(data.id)
      setTimerCount((prevCount) => prevCount + 1)
    },
    onError: (error) => {
      // console.log(error)
      alert('실패')
    },
  })
  const reSandEmailMutate = useMutation(reSandEmailApi, {
    onSuccess: (data) => {
      setLimit(180)
      setWarningMessage('')
      setTimerCount((prevCount) => prevCount + 1)
    },
    onError: (error) => {
      setWarningMessage('알수없는 이유로 실패했습니다. 재발송 해주세요.')
    },
  })
  const ConfirmationMutate = useMutation(ConfirmationNumber, {
    onSuccess: () => {
      setWarningMessage('')
      navigate('/completion')
    },
    onError: (error) => {
      setWarningMessage('인증번호를 다시 확인해주세요.')
    },
  })
  const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/
  useEffect(() => {
    if (emailRegExp.test(sandEmail)) {
      setWarningMessage('')
    }
  }, [sandEmail])
  const sandEmailBtnHandler = () => {
    if (!emailRegExp.test(sandEmail)) {
      setWarningMessage('이메일 형식으로 입력해주세요.')
      return
    }
    setEmailAtom(sandEmail)
    if (emailAtom !== sandEmail) {
      sandEmailMutate.mutate({ email: sandEmail })
    } else {
      reSandEmailMutate.mutate({ id: emailId })
    }
  }
  const reSandEmailBtnHandler = () => {}
  const authKeyBtnHandler = () => {
    ConfirmationMutate.mutate({
      id: emailId,
      authKey,
    })
  }
  return (
    <Section>
      <div>
        <CertificationInfoP>해당 이메일은 편지를 받을 이메일입니다.</CertificationInfoP>
        <SandBoxDiv>
          <CertificationInput
            type="sand"
            value={sandEmail}
            onChange={onChangeSandEmail}
            placeholder="이메일을 적어주세요."
          />
          <Button type="resand" onClick={sandEmailBtnHandler}>
            인증번호 발송
          </Button>
        </SandBoxDiv>

        {!isEmail ? (
          <WarningMessage>{warningMessage}</WarningMessage>
        ) : (
          <>
            <SandBoxDiv>
              <CertificationInput value={authKey} onChange={onChangeAuthKey} placeholder="인증번호를 적어주세요." />
              <Button onClick={authKeyBtnHandler}>인증번호 확인</Button>
            </SandBoxDiv>
            <Timer timeLimit={limit} key={timerCount} />
            <WarningMessage>{warningMessage}</WarningMessage>
          </>
        )}
      </div>
    </Section>
  )
}

export default Certification

const Section = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
`
const CertificationInfoP = styled.p`
  margin-top: 200px;
  margin-left: 5px;
  font-size: 20px;
`
const SandBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 30px;
`
const CertificationInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 15px;
  text-indent: 13px;

  &:focus {
    outline: 1px solid gray;
    transition: 0.2;
  }
  &::placeholder {
    font-size: 15px;
  }
`
const WarningMessage = styled.div`
  line-height: 2;
  font-size: 15px;
  margin-left: 30px;
  color: red;
`
