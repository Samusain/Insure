import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()

const ToggleState = atom({
  key: 'ToggleState',
  default: "",
  effects_UNSTABLE: [persistAtom],
})

export default ToggleState