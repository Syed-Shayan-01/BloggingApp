import { getBlogsData } from "@/services/blogs/blog";
import Link from "next/link";
import React from "react";

const allBlogs = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>
    }
    return (

        <div className="container px-5 py-24 mx-auto">
            {
                data.map((item) => {
                    return (

                        <div key={item.id} className="flex justify-center flex-wrap -m-12">
                            <div className="p-12 md:w-1/2 flex flex-col items-start">
                                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{item.blogCategory}</span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.name}</h2>
                                <p className="leading-relaxed mb-8">{item.BlogContent}</p>
                                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                    <div className="text-indigo-500 inline-flex items-center"><Link href={`/allPages/allBlog/${item.id}`}>Learn More</Link>
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <a className="inline-flex items-center">
                                    <img alt="blog" src={item.bloggerImage} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">{item.bloggerName}</span>
                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    )
                })}
        </div>



    )
};

export default allBlogs;

export async function getServerSideProps() {
    const data = await getBlogsData();
    return {
        props: {
            data,
        }
    }
}

