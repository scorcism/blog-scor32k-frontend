import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-between px-4 py-4 items-center w-full border-b-2 border-b-wheat bg-[#000000]">
            <Link to="/">
            <h2 className="font-extrabold text-xl">scor32k</h2>
            </Link>
            <div className="flex items-center justify-between gap-14 font-bold">
                <Link to="/">Blogs</Link>
                <Link to="https://scor32k.vercel.app/" rel="noreferrer" target="_blank">Portfolio</Link>
                <Link to="https://scor32k.vercel.app/links" rel="noreferrer" target="_blank">Links</Link>
                <Link to="mailto:abhishekpathak1720@gmail.com" rel="noreferrer" target="_blank">Contact</Link>
            </div>
        </nav>
    )
}

export default Header;