import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const [time, settime] = useState("")

    const navigate = useNavigate();
    const getTime = () => {

        let headers = {
            headers: { "Authorization": localStorage.getItem('token') }
        }
        axios.get('http://localhost:8005/user/gettime', headers).then((res) => {
            if (res.data.status === 400) {
                localStorage.clear();
                navigate('/')
            }
            settime(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getTime()
    }, [])

    const logoutpage = () => {
        localStorage.clear();
        navigate('/home')
    }


    return (
        <div>
            <label>Current Time:{time} </label>
            <button onClick={logoutpage}>Logout</button>
        </div>
    )
}
