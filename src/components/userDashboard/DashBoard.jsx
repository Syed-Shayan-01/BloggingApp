/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import React, { useState } from "react";
import PagesName from "../pagesName/PagesName";
import Button from "../button/Button";
import { CKEditor } from "ckeditor4-react";
import Head from "next/head";

const DashboardForm = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = { BlogName: Title, BlogContent: Content, bloggerName: "Sfj" };
      console.log(req);
      const response = await fetch("http://localhost:3000/api/blogs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });
      if (req.BlogContent === "") {
        return alert("Blog Content is not updated");
      } else if (response.ok) {
        alert("Success");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-6 ">
      <Head>
        <script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
      </Head>
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
                {/* <textarea
                  id="content" // Make sure the ID is set to "content"
                  type="text"
                  name="Content"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  value={Content}
                  className="border-2 border-gray-500 focus:outline-blue-400 "
                  placeholder="Write the blog on your thoughts"
                />   */}
                <CKEditor
                  data={Content}
                  onChange={(e) => {
                    setContent(e.editor.getData());
                  }}
                />
              </div>

              <div className="flex p-1">
                <Button text={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardForm;
