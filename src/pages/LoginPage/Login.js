import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")

    const onlogin = () => {

        let payload = {
            email, password
        }
        axios.post('http://localhost:8005/user/login', payload).then((res) => {

            if (res.data.status === 400) {
                alert(res.data.msg)
                return
            }
            localStorage.setItem("otptoken", res.data.otpToken);
            navigate('/verify')
        }).catch((err) => {
            alert(err.data.msg)
            console.log(err)
        })
    }


    return (
        <div>
            <label>email</label>
            <input onChange={(e) => { setemail(e.target.value) }} />
            <label>password</label>
            <input onChange={(e) => { setpassword(e.target.value) }} />
            <button onClick={onlogin}>Login</button>
        </div>
    )
}
