import {create} from "zustand";


export const useAuthUser = create((set): {
    current_user_exists: boolean,
    current_user_name: string,
    set_current_user: (user_name: string) => any
} => ({
    current_user_exists: false,
    current_user_name: "null",
    set_current_user: (user_name: string) => set({current_user_name: user_name})
}))