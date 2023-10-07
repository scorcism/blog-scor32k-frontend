import { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'


const Login = () => {

    let URL = "http://localhost:8000/api/";

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const [message, setMessage] = useState("");

    async function postData(routeurl) {
        await axios.post(`${URL}${routeurl}`, {
            email: data.email,
            password: data.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status == 201) {
                Cookies.set("auth-token", res.data.message)
                alert("Logginin!!")
                window.location.href = "/admin"
            } else {
                window.location.href = "/"
            }
        })
            .catch((err) => {
                if (err.status === 500) {
                    setMessage("Internal server error")
                } else {
                    // hard coded, you can chnage if you want
                    setMessage("Check all the fields")
                }
            })

    }

    useEffect(() => {
        document.title = "Login | scor32k"
        if (Cookies.get("auth-token")) {
            window.location.href = "/admin"
        }
    }, [])

    const submitData = async () => {
        postData("admin/auth/login")
    }

    return (
        <>  
            <section className="flex items-center justify-center w-screen h-screen ">
                <div className=" flex flex-col gap-10 items-center border-2 border-red/50 rounded-xl py-3 px-5">

                <h2 className="text-4xl font-extrabold text-red ">Login</h2>
                <input className="text-xl font-normal border border-red outline-none py-1 px-2 text-black" type="text" value={data.email} onChange={handleChange} name="email" placeholder="Email" />
                <input className="text-xl font-normal border border-red outline-none py-1 px-2 text-black" type="password" value={data.password} onChange={handleChange} name="password" placeholder="password" />
                {
                    message &&
                    <p className="border border-1 border-red py-2 px-5">
                        {message}
                    </p>
                }
                <button className="border py-2 px-3 border-red hover:bg-red/70 rounded-sm bg-gray transition duration-200" onClick={submitData}>submit</button>
                </div>
            </section>
        </>
    )
}
export default Login;