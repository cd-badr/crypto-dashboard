import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <>
        <nav className="flex flex-row items-center p-5 border-b-[1px] gap-10 border-[#ffffff17] bg-[#ffffff00] z-10">
            <Link className='text-white no-underline text-3xl' to={"/"}>
                Logo
            </Link>

            <div className=" text-lg font-thin flex gap-4 w-full">
                <Link className="text-[#fffffff2]">Dashboard</Link>
                <Link className=" text-[#ffffff76]">Markets</Link>
                <Link className=" text-[#ffffff76]">Satake</Link>
                <Link className=" text-[#ffffff76]">Governance</Link>
            </div>
        </nav>
            
        </>
    );
}