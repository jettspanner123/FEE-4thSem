import {create} from "zustand";

export const useTheme = create((set) => ({
    c_color: "white",
    c_backgroundColor: "black",
    set_color: (some_color: string) => set(() => ({
        c_color: some_color
    })),
    set_background_color: (some_color: string) => set(() => ({
        c_backgroundColor: some_color
    }))
}))