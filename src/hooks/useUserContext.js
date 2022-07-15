import React, { createContext, useContext } from 'react';
import { useLocalStorage, useCookieStorage } from ".";
const UserContext = createContext();
const UpdateUserContext = createContext();

export function useUserContext() {
    return [useContext(UserContext), useContext(UpdateUserContext)];
}
function UserProvider({ children }) {
    const [user, setUser] = useLocalStorage("user", "");
    const [cookie, updateCookie] = useCookieStorage("token", 0);
    return (
        <UserContext.Provider value={{ user, cookie }}>
            <UpdateUserContext.Provider value={{ setUser, updateCookie }}>
                {children}
            </UpdateUserContext.Provider>
        </UserContext.Provider >
    )
}

export default UserProvider