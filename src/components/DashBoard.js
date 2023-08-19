// import { useState } from "react"

import { useRef } from "react";


// const DashBoard = () => {
//     const [formData, setFormData] = useState()
//     const handleChange = (e) => {
//         e.preventDefault();
//         setFormData(e.target)
//         console.log(setFormData)
//     }
//     return (
//         <div>
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="text-3xl font-bold mb-3 ">
//                         Dash board
//                     </div>
//                     <div className="bg-white overflow-hidden shadow-md sm:rounded-lg">

//                         <div className="p-6 bg-white border-b border-gray-200">
//                             <form method="POST" onSubmit={handleChange}>
//                                 <div className="mb-6">
//                                     <label className="text-xl font-semibold text-gray-600">Title<span className="text-red-500">*</span></label>< br />
//                                     <input type="text" value={formData} className="border-2   border-gray-300 p-2 w-full focus:border-indigo-500" name="title" id="title" required />
//                                 </div>

//                                 <div className="mb-8">
//                                     <label className="text-xl font-semibold text-gray-600">Content
//                                         <span className="text-red-500">*</span></label><br />
//                                     <textarea name="content" value={formData} className="border-2 w-full h-72 p-3 border-gray-500 focus:border-indigo-500" placeholder={'Write the Content on Your Mind.......'} />

//                                 </div>
//                                 <div className="flex p-1">
//                                     <button role="submit" className="p-3 bg-indigo-500 text-white hover:bg-indigo-400" required>Submit</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DashBoard;




const DashBoard = () => {


    const handleSubmit = async (e, BlogName, BlogContent, bloggerName) => {
        e.preventDefault();
        const data = { BlogName, BlogContent, bloggerName };
        try {
            const response = await fetch("http://localhost:3000/api/blogs", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert("signup Hurry")
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="shadow-md p-4">
            <form onSubmit={handleSubmit}>
                <div className="mt-20">

                    <label htmlFor="title" className="text-2xl font-bold" >Title</label>
                    <input
                        type="text"
                        placeholder="Write the title this blog"
                        className="border-2  border-gray-300 p-2 w-full focus:border-indigo-500"
                        name="title"
                        id="title"
                        required
                    />
                </div>

                <div className="mt-10">
                    <label htmlFor="Content" className="text-2xl mt- font-bold" >Content</label>
                    <textarea
                        name="BlogContent"
                        className="border-2 w-full h-72 p-3 border-gray-500 focus:border-indigo-500"
                        placeholder="Write the Content on Your Mind......."
                    />
                </div>

                <div className="flex p-1">
                    <button
                        type="submit"
                        className="p-3 rounded bg-indigo-500 text-white hover:bg-indigo-400"
                        required
                    >
                        Submit Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DashBoard;


