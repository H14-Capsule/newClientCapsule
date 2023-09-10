import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import letterImg from '../assets/letterimg.png'
import useInput from '../components/useInput'
import letterAtom from '../recoil/letterAtom'

const Letter = () => {
  const [letterText, setLetterText] = useRecoilState(letterAtom)
  const [letter, setLetter] = useState(letterText)

  const onChangeLetter = (e) => {
    setLetter(e.target.value)
  }
  useEffect(() => {
    setLetterText(letter)
  }, [letter])
  return (
    <LetterDiv>
      <EditorTextarea value={letter} onChange={onChangeLetter} />
    </LetterDiv>
  )
}

export default Letter

const LetterDiv = styled.div`
  background-image: url(${letterImg});
  background-size: 640px 90vh;
  height: 90vh;
`
const EditorTextarea = styled.textarea`
  margin-top: 60px;
  margin-left: 50px;
  width: 505px;
  height: 470px;
  padding: 15px;
  border: none;
  resize: none;

  font-size: 20px;
  &:focus {
    outline: none;
  }
`
