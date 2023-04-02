import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword} from "firebase/auth"


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Register = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })

    }
    return (
        <div>
            <h1 className="text-center my-5"> Register </h1>
            <form onSubmit={Register}>
                <input 
                type="email"
                placeholder="Email"
                className="form-control my-3"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                type="password"
                placeholder="Password"
                className="form-control my-3"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button type='submit' className="btn btn-success btn-block">Register</button>
            </form>
            {/* <div>Don't have an account? <Link to="/register">Register</Link></div> */}
        </div>    
    )
}

export default Register