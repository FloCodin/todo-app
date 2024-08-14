import prisma from "@/lib/db";
import Link from "next/link";
import ActionButtons from "@/app/comps/ActionButtons";

export default async function Home() {
    const posts = await prisma.post.findMany();

    return (
        <main className="">
            <div className="flex h-screen justify-center bg-gray-600 ju">
                <div className="justify-center pt-80">
                    <input type="text" className="border-black border-2" placeholder="write your ToDO here"/>
                    <ActionButtons/>
                </div>


                <div>
                    <ul className="border-t border-b border-black/10 py-5 leading-8">
                        {posts.map((post) => (
                            <li key={post.id} className="flex items-center justify-between px-5">
                                <Link href={`/posts/${post.slug}`}> {post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

/*
https://www.youtube.com/watch?v=QXxy8Uv1LnQ
 */