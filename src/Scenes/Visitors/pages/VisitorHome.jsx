import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import { useEffect } from 'react';



const VisitorHome = () => {


    useEffect(() => {
        document.title = "Blogs | scor32k"
    }, [])


    return (
        <div className=''>
            <Header />
            <h1 onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className={`fixed bottom-7 text-wheat/80 hover:text-wheat/90 right-2 font-Poppins font-semibold border border-wheat/40 bg-wheat/10 hover:bg-black/60 transition duration-200 py-1 px-3 rounded cursor-pointer`}>Top</h1>
            <Body />
            <Footer />
        </div>
    )
}

export default VisitorHome;