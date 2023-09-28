import { useState } from "react";
import axios from 'axios';


const Login = () => {

    let URL = "http://localhost:8000/api/";

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function postData(routeurl) {
        await axios.post(`${URL}${routeurl}`, {
            email: data.email,
            password: data.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
            console.log(res.response);
        })
        .catch((err)=>{
            console.log(err.response)
        })


    }

    const submitData = async () => {
        postData("admin/auth/login")
    }

    return (
        <>
            <input type="text" value={data.email} onChange={handleChange} name="email" placeholder="Email" />
            <input type="text" value={data.password} onChange={handleChange} name="password" placeholder="password" />
            <button onClick={submitData}>submit</button>
        </>
    )
}
export default Login;