import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    } as Prisma.PostFindUniqueArgs); // Typenassertion auf Prisma-Args


    return (
        <main className="">
            <div className="flex h-screen justify-center bg-gray-600 ju">
                <div className="justify-center pt-80">
                    <h1 className="text-3xl font-semibold">{post?.title}</h1>
                    <h2>{post.content}</h2>
                </div>
            </div>
        </main>
    );
}