import profile from "@/pages/profile";

export const createAuthSlice = (set) => ({
    userInfo: undefined,
    setUserInfo: (userInfo) => set({ userInfo }),
    // setProfileSetup: (ProfileSetup) => set({ ProfileSetup }),
});

