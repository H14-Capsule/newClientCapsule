import { atom } from 'recoil';

const certificationAtom = atom({
  key: 'email',
  default: {
    email: ''
  },
})

export default certificationAtom