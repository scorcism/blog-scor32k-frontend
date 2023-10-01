import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-between px-4 py-4 items-center w-full border-b-2 border-b-wheat">
            <h2>scor32k</h2>
            <div className="flex items-center justify-between gap-14">
                <Link to="#">Blogs</Link>
                <Link to="#">Portfolio</Link>
                <Link to="#">Links</Link>
                <Link to="#">Contact</Link>
            </div>
        </nav>
    )
}

export default Header;