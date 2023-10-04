import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import AddBlog from './Components/AddBlog';
import AllBlog from './Components/AllBlog';
import Footer from '../Visitors/Components/Footer';

const AdminHome = () => {


    useEffect(() => {
        if (!Cookies.get("auth-token")) {
            window.location.href = "/"
        }
    }, [])

    const [showTables, setShowTables] = useState({
        add: true,
        all: false,
    })

    const handleLogout = () => {
        if (window.confirm("Do you want to logout?")) {
            Cookies.remove("auth-token");
            window.location.href = "/"
        }
    }

    return (
        <div className=''>
            <div className='flex justify-between pt-2 pb-3 px-5 bg-gray-900'>
                <section className='flex justify-start gap-10 items-center'>
                    <p onClick={() => {
                        setShowTables({
                            add: true,
                            all: false
                        })
                    }} className='cursor-pointer hover:border-b-2 hover:border-red border-b-2 border-gray-900 transition duration-200'>Add Blog</p>
                    <p onClick={() => {
                        setShowTables({
                            add: false,
                            all: true
                        })
                    }} className='cursor-pointer hover:border-b-2 hover:border-red border-b-2 border-gray-900 transition duration-200'>All Blogs</p>
                </section>
                <section>
                    <button onClick={handleLogout} className='border rounded-sm border-red py-1 px-2'>Logout</button>
                </section>
            </div>
            <div className='h-full py-5'>
                {
                    showTables.add &&
                    <AddBlog />
                }
                {
                    showTables.all &&
                    <AllBlog />
                }
            </div>
            <Footer/>
        </div>
    )
}

export default AdminHome;