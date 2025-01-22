import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-gray-200">
            <ul className="py-4 px-3 container gap-4 text-lg flex items-center justify-center">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/profile"}>Profile</Link></li>
                <li className="border-2 border-black rounded-md px-2 py-1">
                    <Link href={""}>Signin</Link>
                </li>
            </ul>            
        </div>
    );
};

export default Navbar;