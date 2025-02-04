// import Blog from "./Blog/components/Blog";
import GetAllPosts from "@/lib/GetAllPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await GetAllPosts();

  return (
    <main className="max-w-7xl w-full mx-auto my-8">
      <ul className="grid grid-cols-12 gap-4">
            {
              posts.map((post) => <Link key={post.id} className="p-4 transition-colors ease-in-out duration-200 text-center hover:text-white hover:bg-blue-500 rounded-md col-span-12 md:col-span-4 lg:col-span-3 shadow-md mb-2"
                href={`/Blog/${post.id}`}>
                <li key={post.id}>
                    <p>{post.title}</p>
                 </li>
                </Link>
              )
            }
          </ul>
    </main>
  );
}
