import GetPost from "@/lib/GetPost";

const page = async({params}) => {
    const {id} = await params;
    const post = await GetPost(id)
    return (
        <div className="max-w-[400px] w-full mx-auto p-6 mt-20 rounded-md shadow-lg">
            <h2 className="text-lg mb-2 font-semibold">{post.title}</h2>
            {post.body}
        </div>
    );
};

export default page;