import { NewPost } from "@/components/new-post";
import { Posts } from "@/components/posts";
import { posts } from "@/data/posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HobbyPage({ params }: PageProps) {
  const { slug } = await params;

  const filteredPosts = posts.filter((post) => post.hobby?.slug === slug);

  return (
    <div className="relative w-full mx-4 space-y-4 mt-4">
      <div className="">
        <NewPost />
      </div>

      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Posts key={post.date.toISOString()} post={post} />
        ))}
      </div>
    </div>
  );
}
