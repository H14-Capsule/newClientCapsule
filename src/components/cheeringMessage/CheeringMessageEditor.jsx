import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import useInput from '../useInput'

const CheeringMessageEditor = () => {
  const [nickName,onChangeNickName] = useInput();
  const [content,onChangeContent] = useInput();

  return (
    <CheeringMessageSection>
      <WriteBoxDiv>
        <label>작성자</label><NickNameInput value={nickName} onChange={onChangeNickName} placeholder='응원하는 공간입니다. 사칭은 삼가해 주세요.'/>
      </WriteBoxDiv>
      <WriteBoxDiv>
        <label>내용</label><ContentTextarea value={content} onChange={onChangeContent} placeholder='힘나는 응원글을 3글자 이상 적어주세요.'/>
      </WriteBoxDiv>
      <Button type='save'>응원글 저장하기</Button>
    </CheeringMessageSection>
  )
}

export default CheeringMessageEditor

const CheeringMessageSection =styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;
  padding-top:40px;
  padding-bottom:20px;
  border-bottom:1px solid #ccc;
  font-size:20px;

` 
const WriteBoxDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap:20px;
  label{
    width:40px;
    text-align:center;
  }
`

const NickNameInput = styled.input`
  width:400px;
  height:35px;
  text-indent: 15px;
  font-size:20px;
  border-radius:13px;
  border:1px solid #ccc;
  &:focus {
    outline: 1px solid gray;
    transition:0.2;
  }
`
const ContentTextarea = styled.textarea`
  width:370px;
  height:40px;
  padding:15px;
  font-size:20px;
  border-radius:13px;
  border:1px solid #ccc;
  resize: none;
  &:focus {
    outline: 1px solid gray;
    transition:0.2;
  }
`