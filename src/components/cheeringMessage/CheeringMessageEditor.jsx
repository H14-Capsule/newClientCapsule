import React, { useRef } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import styled from 'styled-components'
import { cheeringMessageEditor } from '../../api/cheering'
import Button from '../Button'
import useInput from '../useInput'

const CheeringMessageEditor = () => {
  const [nickname, onChangeNickname, updateNickname] = useInput('')
  const [content, onChangeContent, updateContent] = useInput('')
  const queryClient = useQueryClient()
  const nicknameInput = useRef()
  const contentTextarea = useRef()

  const cheeringMessageMutate = useMutation(cheeringMessageEditor, {
    onSuccess: () => {
      queryClient.invalidateQueries('cheeringMessageList')
      updateContent('')
      updateNickname('')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const cheeringMessageSaveBtnHandler = () => {
    if (nickname.length < 1) {
      nicknameInput.current.focus()
      return
    }
    if (content.length < 4) {
      contentTextarea.current.focus()
      return
    }
    if (content.length > 80) {
      alert('글자수가 80자를 초과했습니다.')
      return
    }
    cheeringMessageMutate.mutate({
      nickname,
      content,
    })
  }
  return (
    <CheeringMessageSection>
      <WriteBoxDiv>
        <label>작성자</label>
        <NickNameInput
          ref={nicknameInput}
          value={nickname}
          onChange={onChangeNickname}
          placeholder="응원하는 공간입니다. 사칭은 삼가해 주세요."
        />
      </WriteBoxDiv>
      <WriteBoxDiv>
        <label>내용</label>
        <ContentTextarea
          ref={contentTextarea}
          value={content}
          onChange={onChangeContent}
          placeholder="힘나는 응원글을 3글자 이상 적어주세요."
        />
      </WriteBoxDiv>
      <Button type="save" onClick={cheeringMessageSaveBtnHandler}>
        응원글 저장하기
      </Button>
    </CheeringMessageSection>
  )
}

export default CheeringMessageEditor

const CheeringMessageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 20px;
`
const WriteBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  label {
    width: 60px;
    text-align: center;
  }
`

const NickNameInput = styled.input`
  width: 400px;
  height: 35px;
  text-indent: 15px;
  font-size: 15px;
  border-radius: 13px;
  border: 1px solid #ccc;
  &:focus {
    outline: 1px solid gray;
    transition: 0.2;
  }
  &::placeholder {
    font-size: 15px;
  }
`
const ContentTextarea = styled.textarea`
  width: 370px;
  height: 40px;
  padding: 15px;
  font-size: 15px;
  border-radius: 13px;
  border: 1px solid #ccc;
  resize: none;
  &:focus {
    outline: 1px solid gray;
    transition: 0.2;
  }
  &::placeholder {
    font-size: 15px;
  }
`
