
const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full h-6 border-t-2 border-t-white py-5 bg-black">
            <p onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className="text-xl hover:text-red cursor-pointer duration-200 ">Abhishek Pathak</p>
        </footer>
    )
}

export default Footer;