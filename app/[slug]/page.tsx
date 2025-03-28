interface Props {
  params: {
    slug: string;
  };
}

export default async function HobbyPage({ params }: Props) {
  const { slug } = params;

  return <div>{slug}</div>;
}
