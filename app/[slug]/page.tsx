interface Props {
  params: {
    slug: string;
  };
}

export default async function HobbyPage({ params }: Props) {
  return <div>{params.slug}</div>;
}
