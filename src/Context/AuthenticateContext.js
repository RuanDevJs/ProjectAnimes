import React, { createContext } from 'react'
import useAuhtenticate from '../hooks/useAuthenticate';
import useUser from '../hooks/useUser';

export const AuthenticateContext = createContext();

export function AuthenticateProvider({children}) {
    const {SignIn, SignOut, LogOut, authenticated, loading, id} = useAuhtenticate();

    return (
        <AuthenticateContext.Provider value={{ SignIn, SignOut, LogOut, authenticated, loading, id}}>
            {children}
        </AuthenticateContext.Provider>
    )
}

