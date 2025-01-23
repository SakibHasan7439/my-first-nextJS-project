import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
import React from 'react';

const Profile = async() => {
    const {isAuthenticated} = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    if(!isLoggedIn) {
        redirect('/api/auth/login'); 
    }

    return (
        <div className='p-6 text-xl rounded-md mt-20 shadow-lg max-w-[300px] w-full mx-auto'>
            <h2>Welcome to your profile</h2>
        </div>
    );
};

export default Profile;
