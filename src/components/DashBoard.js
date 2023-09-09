

// const DashBoard = () => {

import Head from "next/head"


//     const handleSubmit = async (e, BlogName, BlogContent, bloggerName) => {
//         e.preventDefault();
//         const data = { BlogName, BlogContent, bloggerName };
//         try {
//             const response = await fetch("http://localhost:3000/api/blogs", {
//                 method: "POST", // or 'PUT'
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });
//             if (response.ok) {
//                 alert("signup Hurry")
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }

//     return (
//         <div className="shadow-md p-4">
//             <form onSubmit={handleSubmit}>
//                 <div className="mt-20">

//                     <label htmlFor="title" className="text-2xl font-bold" >Title</label>
//                     <input
//                         type="text"
//                         placeholder="Write the title this blog"
//                         className="border-2  border-gray-300 p-2 w-full focus:outline-blue-400"
//                         name="title"
//                         id="title"
//                         required
//                     />
//                 </div>

//                 <div className="mt-10">
//                     <label htmlFor="Content" className="text-2xl mt- font-bold" >Content</label>
//                     <textarea
//                         name="BlogContent"
//                         className="border-2 w-full h-72 p-3 rounded-md focus:outline-blue-400"
//                         placeholder="Write the Content on Your Mind......."
//                     />
//                 </div>

//                 <div className="flex p-1">
//                     <button
//                         type="submit"
//                         className="p-3 rounded bg-indigo-500 text-white  focus:shadow-outline-blue"
//                         required
//                     >
//                         Submit Blog
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default DashBoard;



import React, { useEffect } from 'react';
import Button from "./button/Button";
import PagesName from "./pagesName/PagesName";

const DashboardForm = () => {

    useEffect(() => {
        const ContentEditor = () => {
            const script = document.createElement('script');
            script.src = 'https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js';
            script.async = true;
            script.onload = () => {
                CKEDITOR.replace('content');
            };
            document.body.appendChild(script);
        }

        ContentEditor();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    return (


        <div className="py-6 ">
            <nav className=" mt-1 py-2 text-4xl text-center font-mono">
                <PagesName PagesName={'Dashboard'} />
            </nav>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form onSubmit={handleSubmit} >
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 border-gray-300  focus:outline-blue-400 p-2 w-full" placeholder="Blog Title" name="title" id="title" required />
                            </div>

                            <div className="mb-8">
                                <label className="text-xl text-gray-600">Content<span className="text-red-500">*</span></label><br />
                                <textarea name="content" className="border-2 border-gray-500 focus:outline-blue-400 " placeholder="Write the blog on your thoughts" required />
                            </div>

                            <div className="flex p-1">
                                <Button text={'Submit'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default DashboardForm;
