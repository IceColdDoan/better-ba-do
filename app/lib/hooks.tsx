"use client"

import { auth, firestore } from "@/app/lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        let unsubscribe; 

        if (user) {
            unsubscribe = onSnapshot(doc(firestore, "user", user.uid), (doc) => {
                setUsername(doc.data()?.username);
            })
        } else {
            setUsername(null);
        }

        return unsubscribe;
    }, [user]);

    return { user, username }
}