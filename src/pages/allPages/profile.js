import { BsPencilSquare } from 'react-icons/bs'
import Image from "next/image"
import { getSession } from 'next-auth/react';
import { useState } from 'react';
const profile = () => {
    const [newName, setnewName] = useState();
    const changeName = () => {
        let newName = prompt("Enter The New Name")
        setnewName(newName);
    }
    return (
        <>
            <div>
                <div className="text-3xl font-bold flex justify-center mt-5">
                    Profile
                </div>
            </div>
            {/* image div */}
            <div className="m-20 shadow-md p-4 ml-10">
                <div className="flex mt-20">
                    <Image src={'/Images/profile.png'} alt='Profile Image' width={100} height={25} />
                </div>
                <div className="mt-4 font-semibold">{newName}<span className=' inline-flex items-center cursor-pointer'><BsPencilSquare onClick={changeName} /></span></div>
                {/* Change Password Input */}
                <h2 className='font-bold text-xl mt-10'>
                    Password
                </h2>
                <div >
                    <div className='my-4'>
                        <input type='password' name='password' className='w-80 p-2 border-gray-500 border-2' placeholder='Enter the Old password' />
                    </div>
                    <div className='my-4'>
                        <input type='password' name='password' className='w-80 p-2 border-gray-500 border-2' placeholder='Enter the Confirm password' />
                    </div>
                    <div className='my-4'>
                        <input type='password' name='password' className='w-80 p-2 border-gray-500 border-2' placeholder='Enter the Repeat password' />
                    </div>
                </div>
                <button className='bg-indigo-200  text-black hover:bg-indigo-600 font-bold rounded p-2'> Change Password</button>
            </div>


        </>
    )
}

export default profile;

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: "/Forms/login",
                parmanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
};


