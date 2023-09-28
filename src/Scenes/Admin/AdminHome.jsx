import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Outlet, Route } from 'react-router-dom';

const AdminHome = () => {


    useEffect(() => {
        if(!Cookies.get("auth-token")){
            window.location.href="/login"
        }
    }, [])

    return (
        <>
        This is the admin home 
        <Outlet/>
        </>
    )
}

export default AdminHome;