import React, { useEffect, useState } from "react";
import PagesName from "../pagesName/PagesName";
import Button from "../button/Button";
const DashboardForm = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Blog, setBlog] = useState([]);
  useEffect(() => {
    const ContentEditor = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js";
      script.async = true;
      script.onload = () => {
        CKEDITOR.replace("Content");
      };
      document.body.appendChild(script);
    };

    ContentEditor();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ckContent = CKEDITOR.instances.Content.getData();
    setContent(ckContent);
    console.log(Title, Content);

    setBlog([...Blog, { Title, Content }]);
    console.log(Blog);
  };

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className="py-6 ">
      <nav className=" mt-1 py-2 text-4xl text-center font-mono">
        <PagesName PagesName={"Dashboard"} />
      </nav>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Title <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={Title}
                  className="border-2 border-gray-300 focus:outline-blue-400 p-2 w-full"
                  placeholder="Blog Title"
                  name="title"
                  id="title"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="text-xl text-gray-600">
                  Content<span className="text-red-500">*</span>
                </label>
                <br />
                <textarea
                  type="text"
                  name="Content"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  value={Content}
                  className="border-2 border-gray-500 focus:outline-blue-400 "
                  placeholder="Write the blog on your thoughts"
                  required
                />
              </div>

              <div className="flex p-1">
                <Button text={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        {Blog.map((check) => {
          return (
            <>
              <div>{check.Title}</div>
              {
                <div
                  dangerouslySetInnerHTML={createMarkup(check.Content)}
                ></div>
              }
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardForm;
