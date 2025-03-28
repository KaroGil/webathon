import { getInterestBySlug } from "@/components/interests";
import { Posts } from "@/components/posts";
import { posts } from "@/data/posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HobbyPage({ params }: PageProps) {
  const { slug } = await params;

  const interest = getInterestBySlug(slug);

  const filteredPosts = posts.filter((post) => post.hobby?.slug === slug);

  return (
    <>
      <div className="capitalize w-full flex justify-center text-xl py-4">{`${interest?.infinitiv}kompis`}</div>
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Posts key={post.date.toISOString()} post={post} />
        ))}
      </div>
    </>
  );
}
