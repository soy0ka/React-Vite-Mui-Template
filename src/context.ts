import { useContext, createContext } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainContextData {}

export const MainContext = createContext<{
  update: (cb: (data: MainContextData) => MainContextData) => void
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update: () => {},
})

export const useMainContext = () => useContext(MainContext)
