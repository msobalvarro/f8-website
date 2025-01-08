import { create } from 'zustand'
import { PreferencesPropierties } from './interfaces'

type Props = {
  propierties: PreferencesPropierties[]
  setPropierties: (props: PreferencesPropierties[]) => void
}

export const useStorePropierties = create<Props>((set) => ({
  propierties: [],
  setPropierties: (props: PreferencesPropierties[]) => set(() => ({ propierties: props })),
}))