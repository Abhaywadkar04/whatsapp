
export const createAuthSlice = (set) => ({
    userInfo: undefined,
    setUserInfo: (userInfo) => set({ userInfo }),
    setProfileSetup: (ProfileSetup) => set({ ProfileSetup }),
    setEmail: (Email) => set({ Email }),
});

