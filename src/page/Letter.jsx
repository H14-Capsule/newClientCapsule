import React from 'react'
import styled from 'styled-components'
import letterImg from '../assets/letterimg.png'
import useInput from '../components/useInput'

const Letter = () => {
  const [letter,onChangeLetter] = useInput('');

  return (
    <LetterDiv>
      <EditorTextarea value={letter} onChange={onChangeLetter}/>
    </LetterDiv>
  )
}

export default Letter

const LetterDiv = styled.div`
  background-image: url(${letterImg});
  background-size: 640px 830px ;
  height:830px;
`
const EditorTextarea = styled.textarea`
  margin-top:60px;
  margin-left:50px;
  width:505px;
  height:470px;
  padding:15px;
  border:none;
  resize: none;

  font-size:28px;
  &:focus {
    outline: none;
  }
`