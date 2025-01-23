import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = async() => {

    const {getUser} = getKindeServerSession();
    const user = await getUser();
    console.log(user);

    return (
        <div className="bg-gray-200">
            <ul className="py-4 px-3 container gap-4 text-lg flex items-center justify-center">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/profile"}>Profile</Link></li>
                <li className="bg-blue-500 text-white text-sm rounded-md px-3 py-2">
                    {
                        user ? <LogoutLink>Log out</LogoutLink> :
                        <LoginLink>Sign in</LoginLink>
                    }
                </li>
            </ul>            
        </div>
    );
};

export default Navbar;