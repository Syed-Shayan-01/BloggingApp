import { getBlogsData, getBlogsId } from "@/services/blogs/blog";


const allBlogs = ({ product }) => {
    return (<>
        <div className=" text-center mt-16">

            <div className="text-2xl font-bold">Write the Full Blog</div>
            <div className="mt-10 text-xl font-bold p-10">
                {product.name}
            </div>
            <div className="p-10">
                {product.BlogContent}

            </div>
        </div>
    </>);
};

export default allBlogs;

export async function getStaticPaths() {
    const data = await getBlogsData();

    const paths = data.map((item) => {
        return {
            params: {
                allBlogs: item.id.toString(),
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    const id = context.params.allBlogs;
    const data = await getBlogsId(id);
    return {
        props: {
            product: data,
        }
    }
}

