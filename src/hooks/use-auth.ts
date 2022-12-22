import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
    const [users, setUser] = useState<any>({
        auth: {}
    })

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const currentUser = {
                    email: user.email,
                    uid: user.uid,
                }
                setUser({auth: {currentUser}})
            } else {
                setUser({auth: null})
            }
        });
    }, [])

    return {
        isAuth: !!users.auth,
    }
}