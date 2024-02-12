import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <>
        <nav className="flex flex-row items-center p-5 border-b-[1px] border-[#ffffff2a]">
            <Link className='text-white no-underline' to={"/"}>
                crypto
            </Link>

            <div className="text-[#ffffff52] text-xl flex justify-center gap-3 w-full">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>
        </nav>
            
        </>
    );
}