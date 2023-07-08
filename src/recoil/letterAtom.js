import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: "sessionStorage", // 고유한 key 값
  storage: sessionStorage,
})

const letterAtom = atom({
  key: 'letter',
  default: {
    content: ''
  },
  effects_UNSTABLE: [persistAtom]
})

export default letterAtom