import { NewPost } from "@/components/new-post";
import { Post } from "@/components/posts";
import { posts } from "@/components/types/post";
import Link from "next/link";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HobbyPage({ params }: PageProps) {
  const { slug } = await params;

  // const hobby = getInterestBySlug(slug);
  // if (hobby) {
  //   if (hobby.name === "Bade") {
  //     return <div>Hobby: {hobby.name}</div>;
  //   }
  // }

  const filteredPosts = posts.filter((post) => post.hobby?.slug === slug);

  return (
    <div className="relative p-4 w-full space-y-4">
      <NewPost />
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {filteredPosts.map((post) => (
          <Link href={`/event/${post.id}`} key={post.id}>
            <Post key={post.date.toISOString()} post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
