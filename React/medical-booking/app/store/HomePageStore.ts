import {create} from "zustand";


export const useHomePageStates = create((set) => ({
    isLoginOpen: false,
    setLoginOpen: (some_val: boolean) => set({isLoginOpen: some_val})
}))