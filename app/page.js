import GetAllPosts from "@/lib/GetAllPosts";

export default async function Home() {
  const posts = await GetAllPosts();
  console.log(posts);
  return (
    <main className="max-w-7xl w-full mx-auto my-8">
      <div>
          <ul className="grid grid-cols-12 gap-4">
            {
              posts.map((post) => <li
              className="p-4 rounded-md col-span-12 md:col-span-4 lg:col-span-3 shadow-md mb-2" 
              key={post.id}
              >
                {post.title}
              </li>)
            }
          </ul>
      </div>
    </main>
  );
}
