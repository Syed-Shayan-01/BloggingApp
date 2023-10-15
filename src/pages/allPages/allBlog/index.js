
import List from "@/components/list/List";
import PagesName from "@/components/pagesName/PagesName";
import { getBlogsData } from "@/services/blogs/blog";
import Image from "next/image";
import React from "react";

// const allBlogs = ({ data }) => {
//     if (!data) {
//         return <div>Loading...</div>
//     }

//     function createMarkup(c) {
//         return { __html: c };
//     }
//     return (
//         <>
//             <nav className=" py-10 text-4xl text-center font-mono">
//                 <PagesName PagesName={'All Blogs'} />
//             </nav>
//             <div className="container d px-5 py-10 mx-auto">
//                 {data.map((item) => {
//                     return (
//                         <div key={item.id} className="flex justify-center shadow-md m-20 flex-wrap -m-12">
//                             <div className="p-12 md:w-1/2 flex flex-col items-start">
//                                 <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{item.Category}</span>
//                                 <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.BlogName}</h2>
//                                 {/* <p className="leading-relaxed mb-8 break-words w-96">{item.BlogContent && item.BlogContent.length >= 40
//                                         ? `${item.BlogContent.slice(0, 40)}...`
//                                         : item.BlogContent}</p> */}

//                                 <div className="leading-relaxed mb-8 break-words w-96"
//                                     dangerouslySetInnerHTML={createMarkup(
//                                         item.BlogContent && item.BlogContent.length >= 60
//                                             ? `${item.BlogContent.slice(100, 200)}...`
//                                             : item.BlogContent
//                                     )} />
//                                 <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
//                                     <div className="text-indigo-500 inline-flex items-center"><Link href={`/allPages/allBlog/${item.id}`}>Learn More</Link>
//                                         <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="M5 12h14"></path>
//                                             <path d="M12 5l7 7-7 7"></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <a className="inline-flex items-center">
//                                     <img alt="blog" src={item.bloggerImage} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
//                                     <span className="flex-grow flex flex-col pl-4">
//                                         <span className="title-font font-medium text-gray-900">{item.bloggerName}</span>
//                                         <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     )
//                 })}  </div>
//         </>


//     )
// };




const Blog = () => {
  return (
    <>
      <section className="pt-20 flex  justify-center pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap ">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color">{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};


// export default allBlogs

// export default allBlogs;

export async function getServerSideProps() {
  const data = await getBlogsData();
  return {
    props: {
      data,
    }
  }
}

