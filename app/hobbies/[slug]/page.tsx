import { NewPost } from "@/components/new-post";
import { Post } from "@/components/posts";
import { posts } from "@/components/types/post";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HobbyPage({ params }: PageProps) {
  const { slug } = await params;

  const filteredPosts = posts.filter((post) => post.hobby?.slug === slug);

  return (
    <div className="relative p-4 w-full space-y-4">
      <NewPost />
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} link={`/event/${post.id}`} />
        ))}
      </div>
    </div>
  );
}
