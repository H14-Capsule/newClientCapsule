import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'sessionStorage', // 고유한 key 값
  storage: sessionStorage,
})

// sessionStorage에서 초기값을 가져오기
const sessionStorageInitialValue = sessionStorage.getItem('yourSessionStorageKey')

// 만약 sessionStorage에 값이 존재하면 해당 값을 사용하고, 그렇지 않으면 기본값 사용
const initialContent = sessionStorageInitialValue ? JSON.parse(sessionStorageInitialValue) : { content: '' }

const letterAtom = atom({
  key: 'letter',
  default: initialContent,
  effects_UNSTABLE: [persistAtom],
})

export default letterAtom
