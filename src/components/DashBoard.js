

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


