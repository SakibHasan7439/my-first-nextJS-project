// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
// import { redirect } from 'next/navigation';
// import React from 'react';

// const Profile = async() => {
//     const {isAuthenticated} = getKindeServerSession();
//     const isLoggedIn = await isAuthenticated;
//     if(!isLoggedIn) {
//         redirect('/api/auth/login') 
//     }
//     return (
//         <div>
//             <h2>This is profile page</h2>
//         </div>
//     );
// };

// export default Profile;
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};

export default page;