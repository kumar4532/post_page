import { create } from "zustand";

const useGetText = create((set) => ({
    content: null,
    setContent: (content) => set({ content })
}))

export default useGetText;