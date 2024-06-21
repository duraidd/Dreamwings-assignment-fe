import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Verify = () => {

    const navigate = useNavigate();
    
    const [otp, setotp] = useState("")
    const onverify =()=>{
        const otptoken = localStorage.getItem('otptoken');
        let headers = {
            headers:{"Authorization" : otptoken}
        }
        axios.post('http://localhost:8005/user/verify',{otp:otp},headers).then((res)=>{
            if(res.data.status === 400){
                alert(res.data.msg)
                return
            }
            localStorage.clear();
            localStorage.setItem("token",res.data.token);
            navigate('/home')
        }).catch((err)=>{

        })
    }
  return (
    <div>
        <label>enter otp</label>
        <input onChange={(e)=>{setotp(e.target.value)}} />
        <button onClick={onverify}>Verify</button>
    </div>
  )
}
