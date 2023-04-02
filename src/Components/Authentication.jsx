import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

function Authentication() {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }

        });
            return() =>{
                listen();
            }
    }, [])

    const signout = () => {
        signOut(auth).then(() =>{
            console.log('sign out successfully')
        })
    }

  return (
    <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={signout}>Sign Out</button></> : <p>Signed Out</p> }</div>
  )
}

export default Authentication