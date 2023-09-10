import { useState } from 'react'

const useInput = (initialValue) => {
  const [data, setData] = useState(initialValue)
  const update = (value) => {
    setData(value)
  }
  const onChange = (e) => {
    setData(e.target.value)
  }
  return [data, onChange, update]
}

export default useInput
