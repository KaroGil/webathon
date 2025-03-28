interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HobbyPage({ params }: PageProps) {
  const { slug } = await params;
  return <div className="capitalize">{`${slug}kompis`}</div>;
}
