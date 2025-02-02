// export const createAuthSlice = (set) => ({
//     userInfo: JSON.parse(localStorage.getItem("userInfo")) || undefined,
//     setUserInfo: (userInfo) => {
//         if (userInfo) {
//             localStorage.setItem("userInfo", JSON.stringify(userInfo)); // ✅ Persist user
//         } else {
//             localStorage.removeItem("userInfo"); // ✅ Clear on logout
//         }
//         set({ userInfo });
//     },
//     setProfileSetup: (ProfileSetup) => set({ ProfileSetup }),
//     setEmail: (Email) => set({ Email }),
// });



export const createAuthSlice = (set) => ({
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || undefined,
    setUserInfo: (userInfo) => set({ userInfo }),
    setProfileSetup: (ProfileSetup) => set({ ProfileSetup }),
    setEmail: (Email) => set({ Email }),
})